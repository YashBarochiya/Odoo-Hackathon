
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [showOtpForm, setShowOtpForm] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

//   const handleRequestOtp = async (e) => {
//     e.preventDefault();
//     try {
//       setError('');
//       setMessage('');
      
//       const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
      
//       if (response.data.success) {
//         toast.success('OTP sent to your email. Please check your inbox.');
//         setMessage('OTP sent to your email. Please check your inbox.');
//         setShowOtpForm(true);
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || 'Something went wrong';
//       toast.error(errorMsg);
//       setError(errorMsg);
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       setError('');
//       setMessage('');
      
//       if (newPassword !== confirmPassword) {
//         toast.error('Passwords do not match');
//         return setError('Passwords do not match');
//       }
      
//       const response = await axios.post(backendUrl + '/api/user/reset-password', {
//         email,
//         otp,
//         newPassword
//       });
      
//       if (response.data.success) {
//         const successMsg = 'Password reset successful. You can now login with your new password.';
//         toast.success(successMsg);
//         setMessage(successMsg);
//         // Redirect to login page after few seconds
//         setTimeout(() => {
//           navigate('/login');
//         }, 3000);
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || 'Something went wrong';
//       toast.error(errorMsg);
//       setError(errorMsg);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Forgot Password
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {message && (
//             <div className="mb-4 bg-green-50 border-l-4 border-green-400 p-4">
//               <div className="flex">
//                 <div className="flex-shrink-0">
//                   <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm text-green-700">{message}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {error && (
//             <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
//               <div className="flex">
//                 <div className="flex-shrink-0">
//                   <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm text-red-700">{error}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {!showOtpForm ? (
//             <form className="space-y-6" onSubmit={handleRequestOtp}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
//                 >
//                   Send OTP
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <form className="space-y-6" onSubmit={handleResetPassword}>
//               <div>
//                 <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                   Enter OTP
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="otp"
//                     name="otp"
//                     type="text"
//                     required
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                   New Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="newPassword"
//                     name="newPassword"
//                     type="password"
//                     required
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                   Confirm New Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     required
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
//                 >
//                   Reset Password
//                 </button>
//               </div>
//             </form>
//           )}

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-center">
//               <div className="text-sm">
//                 <a 
//                   href="/login" 
//                   className="font-medium text-yellow-600 hover:text-yellow-500"
//                 >
//                   Back to Login
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { token, setToken, backendUrl, navigate } = useContext(ShopContext);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      
      const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
      
      if (response.data.success) {
        toast.success('OTP sent to your email. Please check your inbox.');
        setMessage('OTP sent to your email. Please check your inbox.');
        setShowOtpForm(true);
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      toast.error(errorMsg);
      setError(errorMsg);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      
      if (newPassword !== confirmPassword) {
        toast.error('Passwords do not match');
        return setError('Passwords do not match');
      }
      
      const response = await axios.post(backendUrl + '/api/user/reset-password', {
        email,
        otp,
        newPassword
      });
      
      if (response.data.success) {
        const successMsg = 'Password reset successful. You can now login with your new password.';
        toast.success(successMsg);
        setMessage(successMsg);
        // Redirect to login page after few seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      toast.error(errorMsg);
      setError(errorMsg);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-gray-100">
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gray-200 rounded-full opacity-40 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-blue-100 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-1/4 right-1/5 w-24 h-24 border border-gray-300 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-gray-300 rounded-md opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Additional Animated Elements */}
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-1/2 left-1/3 w-16 h-16 bg-gray-100 rotate-12 opacity-40 animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 prata-regular">
          Forgot Password
        </h2>
      </div>

      <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 transition-all duration-300 hover:shadow-2xl">
          {message && (
            <div className="mb-4 bg-green-50 border-l-4 border-green-400 p-4 animate-fade-in">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">{message}</p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4 animate-fade-in">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {!showOtpForm ? (
            <form className="space-y-6" onSubmit={handleRequestOtp}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105 transition-all duration-200"
                >
                  Send OTP
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6 animate-fade-in" onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <div className="mt-1">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform hover:scale-105 transition-all duration-200"
                >
                  Reset Password
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="text-sm">
                <Link 
                  to="/login" 
                  className="font-medium text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;