import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        businessId: { type: mongoose.Schema.Types.ObjectId, ref: "Business_info", required: true },
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
        products: { type: [{ productId: String, name: String, price: Number, quantity: Number }] },
        subTotal: { type: Number, default: 0 },
        shippingFee: { type: Number, default: 0, required: true },
        tax: { type: Number, default: 0, required: true },
        discountPrice: { type: Number, default: 0, required: false },
        total: { type: Number, default: 0, required: true },
        paymentMethod: { type: String, default: "", required: false },
        paymentStatus: { type: String, enum: ["unpaid", "paid", "failed"], default: "unpaid" },
        orderStatus: { type: String, enum: ["pending", "processing", "shipped", "delivered", "cancelled"], default: "pending" },
        shippingAddress: { type: String, required: true },
        trackingId: { type: String },
        deliveredAt: { type: Date },
    },
    { timestamps: true }
)

export default mongoose.models.Order || mongoose.model("Order", orderSchema)
