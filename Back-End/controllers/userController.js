import userModel from "../models/userModel.js";
import validator from 'validator';
import OTP from '../models/OTP.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import OTPgenerator from 'otp-generator'
import mailSender from '../utils/mailSender.js';
import passwordResetTemplate from '../mail/passwordResetTemplate.js';
 const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY);
}

export const forgotPassword = async (req, res) => {
  try {
    // Get email from request body
    const { email } = req.body;
    
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email",
      });
    }
    
    // Generate OTP
    var otp = OTPgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    
    // Check unique OTP
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = OTPgenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    
    // Create OTP payload
    const OTPpayload = { email, otp };
    
    // Save OTP in database
    await OTP.create(OTPpayload);
    
    // Send password reset email
    await mailSender(email, 'Password Reset Request', passwordResetTemplate(otp));
    
    // Return response
    return res.status(200).json({
      success: true,
      message: "Password reset OTP sent to your email",
    });
  } catch (error) {
    console.log("Forgot Password Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error sending password reset OTP",
      error: error.message,
    });
  }
};

// Reset password with OTP verification
export const resetPassword = async (req, res) => {
    try {
      // Get data from request body
      const { email, otp, newPassword } = req.body;
      
      // Validate input
      if (!email || !otp || !newPassword) {
        return res.status(403).json({
          success: false,
          message: "All fields are required",
        });
      }
      
      // Check if user exists
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found with this email",
        });
      }
      
      // Find most recent OTP
      const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
      
      // Validate OTP
      if (recentOtp.length == 0) {
        return res.status(400).json({
          success: false,
          message: "OTP not found or expired",
        });
      } else if (otp !== recentOtp[0].otp) {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP",
        });
      }
      
      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      
      // Update only the password field and keep other fields unchanged
      // Use findByIdAndUpdate instead of modifying the user object directly
      await userModel.findByIdAndUpdate(
        user._id,
        { password: hashedPassword },
        { runValidators: false } // Skip validators since we're only updating the password
      );
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: "Password reset successful",
      });
    } catch (error) {
      console.log("Reset Password Error:", error.message);
      return res.status(500).json({
        success: false,
        message: "Error resetting password",
        error: error.message,
      });
    }
  };

export const loginUser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        
        if(!user){
            return res.status(404).json({success:false,message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
       
        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true,token});
        }else{
            return res.status(400).json({success:false,message: "Invalid password"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: error.message});
    }   
}

export const sendOTP = async (req,res)=>{
    try{
         //fetch email from req bidy
        const {email} = req.body;

        // check if user alderady exist
        const chaeckPresent = await userModel.findOne({email});

        if(chaeckPresent){
            return res.status(401).json({
                success: false,
                message: "User Alderady Exist",
            });
        };

        //generate OTP
        var otp = OTPgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars: false,
        });
  
        ("OTP Generated");

        //check Unique otp or not

        let result = await OTP.findOne({otp: otp});

        while(result){
            otp = OTPgenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars: false,
            });
            result = await OTP.findOne({otp:otp});
        }
        const OTPplayload = {email,otp};

        //create an entry in db
        const otpbody = await OTP.create(OTPplayload);
        // console.log("OTPBODY:",otpbody);
        
        // return response
        res.status(200).json({
            success:true,
            message: "Otp Genrated and saved successfully",
            otp
        });
    }catch(error){ 
        console.log("Send OTP SERVER SIDE ERROR................",error.message);
        res.status(401).json({
            success:false,
            message:error.message,
        });
    }
}

export const signUp = async (req,res)=>{
    try{
        //data fetch from rew body
        const{
            name,
            email,
            phone_no,
            password,
            otp
        } = req.body;
        if (phone_no.length < 10) {
            return res.status(403).json({
                success: false,
                message: "Phone number must be 10 digits long"
            });
        }
        
        //data validation
        if(!name||!password||!otp || !phone_no ){
            return res.status(403).json({
                success:false,
                message:"All fields are required",
            })
        }

        //validate otp
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"User with this email id is aldready Registered",
            })
        }
        //find most recent otp
        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        
        //validate OTP
        if(recentOtp.length==0){
            //OTP not found
            return res.status(401).json({
                success:false,
                message:"Otp Not Found",
            });
        }else if(otp!==recentOtp[0].otp){
            //invalid otp
          
            return res.status(401).json({
                success:false,
                message:"Invalid OTP",
            });
        }
        //hash passwardd 
        const hashedPassward = await bcrypt.hash(password,10)
       
        const newUser = await userModel({
            name,
            email,
            phone_no,
            password:hashedPassward,
        });

        const user =  await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, message: "User registered successfully", token}); 
    
    }catch(error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:"user can't be registered plaese try again",
            error:error.message
        });
    }

}

export const adminLogin = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if(email === adminEmail && password === adminPassword){
            const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY)
            res.json({success:true,token});
        }
        else{
            return res.status(400).json({success:false,message: "Invalid admin credentials"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: error.message});
    }   
}

export const getMyProfile = async (req, res) => {
    try {
        // Get token directly from the token header
        const token = req.headers.token;
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "Authentication required. Please provide a token." 
            });
        }
    
        // Verify token and extract user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decoded.id;
    
        // Find user by ID
        const user = await userModel.findById(userId);
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }
    
        // Return user data (excluding password)
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            phone_no: user.phone_no,
            role: user.role,
            createdAt: user.createdAt
        };
    
        res.status(200).json({
            success: true,
            data: userData
        });

    } catch (error) {
        console.log("Error in getMyProfile:", error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
        
        res.status(500).json({
            success: false, 
            message: error.message
        });
    }
}



// export const registerUser = async (req,res) =>{
//    try {

//     const {name,email,password} = req.body;

//     const exists = await userModel.findOne({email: email});
//     if(exists){
//       return res.status(400).json({success:false,message: "User already exists"});
//     }
    
//     // validating email format and strong password
//     if(!validator.isEmail(email)){
//         return res.status(400).json({success:false, message: "Invalid email format"});
//     }

//     if(password.length < 8){
//         return res.status(400).json({success:false, message: "Password must be at least 8 characters long"});
//     }

//     // hashing password
//     const hashedPassword = await bcrypt.hash(password,10);

//     const newUser = new userModel({
//         name,
//         email,
//         password: hashedPassword
//     })

//     const user = await newUser.save();

//     const token = createToken(user._id);
//     res.json({success:true, message: "User registered successfully", token}); 

//    } catch (error) {
//         console.log(error);
//         res.json({success:false, message: error.message});
//    }
// }
