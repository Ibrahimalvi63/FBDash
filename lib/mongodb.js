import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected")
    } catch (err) {
        throw new Error("Database connection failed")
    }
}

export default dbConnect;