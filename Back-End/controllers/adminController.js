import { v2 as cloudinary } from "cloudinary";
import adminModel from '../models/adminModel.js';

export const slidingImage = async (req, res) => {
    try {
        const image1 = req.files?.image1 && req.files.image1[0];
        const image2 = req.files?.image2 && req.files.image2[0];
        const image3 = req.files?.image3 && req.files.image3[0];
        const image4 = req.files?.image4 && req.files.image4[0];
        const image5 = req.files?.image5 && req.files.image5[0];
        const image6 = req.files?.image6 && req.files.image6[0];

        const images = [image1, image2, image3, image4, image5, image6].filter(Boolean);

        if (images.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No images uploaded"
            });
        }

        const imageUrl = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, {
                    resource_type: 'image',
                });
                return result.secure_url;
            })
        );

        const slidingData = {
            image: imageUrl,
        };

        const newEntry = new adminModel(slidingData);
        await newEntry.save();

        return res.status(200).json({
            success: true,
            message: "Images uploaded successfully",
            data: slidingData
        });

    } catch (error) {
        console.error("Error uploading images:", error);
        return res.status(500).json({
            success: false,
            message: "Error uploading images",
            error: error.message
        });
    }
};

export const showImage = async (req, res) => {
    try {
        const images = await adminModel.find();

        return res.status(200).json({
            success: true,
            message: "Images fetched successfully",
            data: images
        });
    } catch (error) {
        console.error("Error fetching images:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch images",
            error: error.message
        });
    }
};


export const removeImage = async (req, res) => {
    try {
        const { imageUrl } = req.body;

        if (!imageUrl) {
            return res.status(400).json({
                success: false,
                message: "Image URL is required"
            });
        }

        // Find the document containing the image
        const doc = await adminModel.findOne({ image: { $in: [imageUrl] } });

        if (!doc) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }

        // Remove the image from the array
        doc.image = doc.image.filter(img => img !== imageUrl);
        await doc.save();

        return res.status(200).json({
            success: true,
            message: "Image removed successfully",
            data: doc.image
        });
    } catch (error) {
        console.error("Error removing image:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to remove image",
            error: error.message
        });
    }
};