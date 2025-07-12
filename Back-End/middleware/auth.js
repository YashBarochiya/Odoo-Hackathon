import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({success:false, message:"Unauthorized access"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({success:false, message:"Unauthorized access"});
    }
}

export default authUser;