import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decoded; // { userId, role }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
