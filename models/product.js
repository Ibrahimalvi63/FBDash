import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business_info", required: true },
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true, index: true },
        description: { type: String, default: "" },
        shortDescription: { type: String, default: "" },
        price: { type: Number, default: 0, required: true },
        discountPrice: { type: Number, default: 0 },
        category: { type: String, required: true },
        subCategory: { type: String, default: "" },
        brand: { type: String, required: true },
        stock: { type: Number, required: true, min: 0 },
        sku: { type: String, unique: true },
        featured: { type: Boolean, default: false },
        image: { type: String },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
        totalSales: { type: Number, default: 0 },
    },
    { timestamps: true }
)

export default mongoose.models.Product || mongoose.model("Product", productSchema)
