import cloudinary from "../cloudinary/config.js";

export const uploadToCloudinary = (buffer, folder = "products") => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            }
        ).end(buffer);
    });
};
