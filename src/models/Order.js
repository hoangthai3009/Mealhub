import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true },
    table: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
    waiter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
        type: String,
        enum: ["PENDING", "IN_PROGRESS", "SERVED", "PAID"],
        default: "PENDING"
    },
    total: { type: Number, default: 0 },
    buffetLevel: { type: String, enum: ["STANDARD", "PREMIUM", "VIP"], default: "STANDARD" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
