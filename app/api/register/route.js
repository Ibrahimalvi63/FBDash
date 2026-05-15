import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return Response.json({ message: "All fields are required" }, { status: 400 })
        }

        const exitingUser = await User.findOne({ email });
        if (exitingUser) {
            return Response.json({ message: "User already exists" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        console.log(user)
        return Response.json({ message: "User registered successfully", user }, { status: 201 })
    } catch (error) {
        return Response.json({ message: "Server error", Error: error.message }, { status: 500 })
    }
}

export async function GET() {
    const response = await dbConnect();
    return Response.json({ message: "Get data successfully", response }, { status: 200 })
}