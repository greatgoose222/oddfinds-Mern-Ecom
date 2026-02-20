import api from "@/utils/api"
import axios from 'axios'

export const uploadToCloudinary = async (file, folder) => {

    // 1️⃣ Generate readable unique name
    const originalName = file.name
        .split(".")[0]
        .replace(/\s+/g, "-")
        .toLowerCase();

    const extension = file.name
        .split(".")
        .pop()
        .toLowerCase();

    const uniqueName = `${originalName}-${extension}-${Date.now()}`;

    const { data } = await api.post(
        "/api/upload/cloudinary-signature",
        { public_id: uniqueName, folder }
    );

    const { timestamp, signature, apiKey, cloudName } = data;

    // 3️⃣ Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);
    formData.append("public_id", uniqueName);

    const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
    );

    return {
        url: uploadRes.data.secure_url,
        public_id: uploadRes.data.public_id
    };
};
