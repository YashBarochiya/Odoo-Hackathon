    import express from 'express';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import mongoose from "mongoose";
    import { v2 as cloudinary } from "cloudinary";
    import cookieParser from "cookie-parser";
      import userRouter from './routes/userRoute.js';
    import adminRouter from './routes/adminRoute.js'

    // app configuration
    dotenv.config();
    const app = express();
    const port = process.env.PORT;
    const MONGO_URI = process.env.MONGO_URI


    // middleware
    app.use(cors());
    app.use(express.json());

    app.use(cookieParser());


    try{
        mongoose.connect(MONGO_URI,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, 
        });
        
        console.log("MongoDB connected successfully!");
    }
    catch(err){
        console.error("Error conneting to MongoDB:", err);
    }

    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_SECRET_KEY,
    });


    app.use('/api/user',userRouter);
    app.use('/api/admin',adminRouter)
    app.get('/',(req,res)=>{
        res.send('API is running...');
    });



    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

    try {
        mongoose.connect(mongo_uri);
        console.log('MongoDB Connected...');
    } catch (error) {
        
    }
