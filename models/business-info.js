import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        ownerName: { type: String },
        phone: { type: String },
        address: { type: String },
        email: { type: String },
    },
    { timestamps: true }
);

export default mongoose.models.Business_info || mongoose.model("Business_info", businessSchema)