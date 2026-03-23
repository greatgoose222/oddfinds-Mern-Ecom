import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { addressSchema, loginSchema, signupSchema } from '../validators/user.schema.js';


export const signup = async (req, res) => {
    try {
        const result = signupSchema.safeParse(req.body);
        // console.log(result.error.issues);
        console.log(result);
        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.issues.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }

        const { name, email, password } = result.data;

        const existEmail = await User.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ success: false, message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const login = async (req, res) => {
    try {
        const result = loginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.issues.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }

        const { email, password } = result.data;

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRETKEY, { expiresIn: "7d" })

        // res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                address: user.address
            }
        });

        // res.status(200).json({
        //     success: true,
        //     user

        // });


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/"
        });

        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error logging out user" });
    }
};


export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                address: user.address
            },
        });



    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
};





export const saveAddress = async (req, res) => {
    try {
        const result = addressSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.issues.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }

        const { fullName, phone, addressLine, city, state, pincode } = result.data;

        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.address = { fullName, phone, addressLine, city, state, pincode, country: "India" };
        await user.save();
        res.status(200).json({
            message: "Address saved successfully",
            address: user.address
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error adding user address",
        });
    }
}

export const removeAddress = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user.userId,
            { $unset: { address: "" } }
        );

        res.status(200).json({
            message: "Address removed successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Error removing user address" });
    }
};



