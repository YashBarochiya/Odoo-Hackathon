import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import { removeImage, showImage, slidingImage } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter = express.Router();

adminRouter.post(
    '/s-image',
    adminAuth,
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 },
        { name: 'image5', maxCount: 1 },
        { name: 'image6', maxCount: 1 }
    ]),
    slidingImage
);


adminRouter.get('/show-images', showImage);
adminRouter.delete('/remove-image', adminAuth, removeImage);

export default adminRouter;
