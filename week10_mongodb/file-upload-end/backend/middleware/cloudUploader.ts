import { v2 as cloudinary } from 'cloudinary';
import { type RequestHandler } from 'express';

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure_url: true
});

// Upload an image
const cloudUploader: RequestHandler = async (req, res, next) => {
  try {
    const filePath = req.image!.filepath;

    const cloudinaryData = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto'
    });

    // console.log(cloudinaryData.secure_url);

    req.body.image = cloudinaryData.secure_url;

    next();
  } catch (error) {
    next(error);
  }
};

export default cloudUploader;
