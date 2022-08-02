import mongoose from "mongoose"
import { PAYMENT_METHOD } from "../constant.js"
const { Schema } = mongoose

const PaymentSchema = new Schema(
    {
        order: {
            type: Schema.Types.ObjectId,
            ref: 'orders',
            required: true
        },
        payment_method: {
            type: String,
            enum: Object.values(PAYMENT_METHOD),
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        paid: {
            type: Number,
            default: 0,
            required: true
        },
        redundant: Number,
        message: String
    },
    { timestamps: true }
)

export default mongoose.model('payments', PaymentSchema)