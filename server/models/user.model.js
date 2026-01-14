import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    address: {
        pincode: { type: String, trim: true },
        fullName: { type: String, trim: true },
        phone: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        addressLine: { type: String, trim: true },
        country: {
            type: String,
        },
    }
},
    { timestamps: true }
)

const User = mongoose.model("User", userSchema);
export default User;