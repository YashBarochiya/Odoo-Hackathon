// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
//         const response = await axios.post(`${backendUrl}/api/user/register`, {
//           name,
//           email,
//           password,
//         });

//         if (response.data.success) {
//           toast.success(response.data.message || 'User registered successfully');
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(`${backendUrl}/api/user/login`, {
//           email,
//           password,
//         });

//         if (response.data.success) {
//           toast.success(response.data.message || 'User logged in successfully');
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//           // navigate('/');
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   useEffect(()=>{
//     if(token){
//       navigate('/');
//     }
//   },[token])
 
//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>

//       {currentState === 'Login' ? null : (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           required
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Name"
//         />
//       )}

//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         type="email"
//         required
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Email"
//       />
//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         required
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//       />

//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <p className="cursor-pointer">Forgot your password?</p>
//         {currentState === 'Login' ? (
//           <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
//             Create Account
//           </p>
//         ) : (
//           <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
//             Login Here
//           </p>
//         )}
//       </div>

//       <button className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//       </button>
//     </form>
//   );
// };

// export default Login;


//   import React, { useContext, useEffect, useState } from 'react';
//   import { ShopContext } from '../context/ShopContext';
//   import { toast } from 'react-toastify';
//   import axios from 'axios';
//   import { Link } from 'react-router-dom';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOtp = async () => {
//     if (!email) {
//       toast.error('Please enter your email address');
//       return;
//     }

//     try {
//       const response = await axios.post(`${backendUrl}/api/user/sendotp`, {
//         email
//       });

//       if (response.data.success) {
//         toast.success(response.data.message || 'OTP sent successfully');
//         setOtpSent(true);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || 'Failed to send OTP');
//     }
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
//         if (!otpSent) {
//           toast.error('Please verify your email with OTP first');
//           return;
//         }

//         if (phoneNo.length !== 10) {
//           toast.error('Phone number must be 10 digits long');
//           return;
//         }

//         const response = await axios.post(`${backendUrl}/api/user/signup`, {
//           name,
//           email,
//           phone_no: phoneNo,
//           password,
//           otp
//         });

//         if (response.data.success) {
//           toast.success(response.data.message || 'User registered successfully');
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(`${backendUrl}/api/user/login`, {
//           email,
//           password,
//         });

//         if (response.data.success) {
//           toast.success(response.data.message || 'User logged in successfully');
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token, navigate]);

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>

//       {currentState === 'Login' ? null : (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           required
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Name"
//         />
//       )}

//       <div className="w-full relative">
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           required
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Email"
//         />
//         {currentState === 'Sign Up' && (
//           <button
//             type="button"
//             onClick={handleSendOtp}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 text-xs"
//           >
//             Send OTP
//           </button>
//         )}
//       </div>

//       {currentState === 'Sign Up' && (
//         <>
//           <input
//             onChange={(e) => setPhoneNo(e.target.value)}
//             value={phoneNo}
//             type="tel"
//             required
//             maxLength="10"
//             pattern="[0-9]{10}"
//             className="w-full px-3 py-2 border border-gray-800"
//             placeholder="Phone Number (10 digits)"
//           />
          
//           <input
//             onChange={(e) => setOtp(e.target.value)}
//             value={otp}
//             type="text"
//             required
//             className="w-full px-3 py-2 border border-gray-800"
//             placeholder="Enter OTP"
//           />
//         </>
//       )}

//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         required
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//       />

//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <Link to="/forgotp" className="cursor-pointer">Forgot your password?</Link>
//         {currentState === 'Login' ? (
//           <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
//             Create Account
//           </p>
//         ) : (
//           <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
//             Login Here
//           </p>
//         )}
//       </div>

//       <button className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//       </button>
//     </form>
//   );
// };

// export default Login;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/user/sendotp`, {
        email
      });

      if (response.data.success) {
        toast.success(response.data.message || 'OTP sent successfully');
        setOtpSent(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        if (!otpSent) {
          toast.error('Please verify your email with OTP first');
          return;
        }

        if (phoneNo.length !== 10) {
          toast.error('Phone number must be 10 digits long');
          return;
        }

        const response = await axios.post(`${backendUrl}/api/user/signup`, {
          name,
          email,
          phone_no: phoneNo,
          password,
          otp
        });

        if (response.data.success) {
          toast.success(response.data.message || 'User registered successfully');
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (response.data.success) {
          toast.success(response.data.message || 'User logged in successfully');
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-gray-100">
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gray-200 rounded-full opacity-40 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-blue-100 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          {/* Moving Geometric Shapes */}
          <div className="absolute top-1/2 left-1/5 w-24 h-24 border border-gray-300 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-gray-300 rounded-md opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
      </div>

      {/* Form Container with Glass Effect */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl w-[90%] sm:max-w-96">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center gap-4 text-gray-800"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <p className="prata-regular text-3xl">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>

          {currentState === 'Login' ? null : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-800 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Name"
            />
          )}

          <div className="w-full relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-800 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Email"
            />
            {currentState === 'Sign Up' && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 text-xs hover:bg-gray-700 transition-colors"
              >
                Send OTP
              </button>
            )}
          </div>

          {currentState === 'Sign Up' && (
            <>
              <input
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
                type="tel"
                required
                maxLength="10"
                pattern="[0-9]{10}"
                className="w-full px-3 py-2 border border-gray-800 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                placeholder="Phone Number (10 digits)"
              />
              
              <input
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-800 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                placeholder="Enter OTP"
              />
            </>
          )}

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            className="w-full px-3 py-2 border border-gray-800 bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            placeholder="Password"
          />

          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <Link to="/forgotp" className="cursor-pointer hover:text-gray-600 transition-colors">Forgot your password?</Link>
            {currentState === 'Login' ? (
              <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer hover:text-gray-600 transition-colors">
                Create Account
              </p>
            ) : (
              <p onClick={() => setCurrentState('Login')} className="cursor-pointer hover:text-gray-600 transition-colors">
                Login Here
              </p>
            )}
          </div>

          <button className="bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-800 transition-colors transform hover:scale-105 transition-transform">
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
