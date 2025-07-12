import express from 'express';
import { adminLogin, loginUser, sendOTP, signUp ,getMyProfile,forgotPassword,resetPassword} from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/signup',signUp);
userRouter.post('/sendotp',sendOTP)
// userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);
userRouter.get('/profile',getMyProfile);


userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password', resetPassword);
export default userRouter;  