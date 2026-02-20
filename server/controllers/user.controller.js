import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existEmail = await User.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ error: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, password: hashedPassword })

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
        res.status(400).json({ message: "Error in Creating User" });
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await User.findOne({ email })
        const raw = await User.collection.findOne({ email });


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

        // res.status(200).json({
        //     success: true,
        //     user: {
        //         id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         role: user.role,
        //         address: user.address
        //     }
        // });

        res.status(200).json({
            success: true,
            user

        });



    }
    catch (error) {
        res.status(500).json({ message: "Error in Logging  User" });

    }
}

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
        const { fullName, phone, addressLine, city, state, pincode } = req.body;
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
        res.status(500).json({ message: "Error adding user Address" });
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



