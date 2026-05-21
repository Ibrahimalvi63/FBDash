import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business_info", required: true },
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, unique: true, sparse: true },
        image: { type: String },
        address: { type: String, required: true },
        wishlist: { type: [String], default: [], required: false },
        totalOrder: { type: Number, default: 0 },
        totalSpent: { type: Number, default: 0 },
        role: { type: String, default: "customer" }
    },
    { timestamps: true }
)

export default mongoose.models.Customer || mongoose.model("Customer", customerSchema)
