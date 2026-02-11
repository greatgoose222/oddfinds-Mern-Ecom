import cloudinary from "../config/cloudinary.js";

export const getCloudinarySignature = async (req, res) => {
    try {
        const timestamp = Math.round(Date.now() / 1000);
        const { public_id, folder } = req.body;

        const signature = cloudinary.utils.api_sign_request(
            {
                timestamp,
                folder,
                public_id
            },
            process.env.CLOUDINARY_API_SECRET
        );

        res.json({
            timestamp,
            signature,
            apiKey: process.env.CLOUDINARY_API_KEY,
            cloudName: process.env.CLOUDINARY_CLOUD_NAME
        });

    } catch (error) {
        res.status(500).json({ message: "Signature error" });
    }
};
