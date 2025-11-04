import mongoose from "mongoose";

const tableSchema = new mongoose.Schema(
    {
        tenant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tenant",
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            enum: ["NORMAL", "VIP"],
            default: "NORMAL",
        },
        status: {
            type: String,
            enum: ["AVAILABLE", "BOOKED", "IN_USE"],
            default: "AVAILABLE",
        },
    },
    { timestamps: true }
);

tableSchema.index({ tenant: 1, number: 1 }, { unique: true });

export default mongoose.model("Table", tableSchema);
