import bcrypt from 'bcryptjs';
// import { User } from '../model/user';
import {User} from "../model/user.js";

export const register = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;

        // Validate input
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "This email id is already registered"
            });
        }

        // Hash password and create user
        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            password: hashPassword
        });

        return res.status(201).json({
            success: true,
            message: "Account Created Successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// export default register;
