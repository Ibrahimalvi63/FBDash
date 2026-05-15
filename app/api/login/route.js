import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        await dbConnect();

        const cookieStore = await cookies();
        const { email, password } = await req.json();

        if (!email || !password) {
            return Response.json({ message: "All fields are required" }, { status: 400 })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return Response.json({ message: "User not found" }, { status: 400 })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return Response.json({ message: "Invalid password" }, { status: 400 })
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        })

        return Response.json(
            {
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            },
            { status: 200 }
        )
    } catch (err) {
        return Response.json({ message: "Server error", Error: err.message }, { status: 400 })
    }
}