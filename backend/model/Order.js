import mongoose from "mongoose"
import { ORDER_STATUS } from "../constant.js"
const { Schema } = mongoose

const OrderSchema = new Schema(
    {
        orderId: {
            type: String,
            unique: true,
            required: true
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: 'delivery_services'
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'products'
            }
        ],
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'customers'
        },
        trip: {
            type: Schema.Types.ObjectId,
            ref: 'trips'
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: 'receivers'
        },
        total_price: {
            type: Number,
            default: null
        },
        status: {
            type: String,
            enum: Object.values(ORDER_STATUS),
            default: ORDER_STATUS.waiting,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        bills: [
            {
                type: Schema.Types.ObjectId,
                ref: 'bills'
            }
        ]
    },
    { timestamps: true }
)

export default mongoose.model('orders', OrderSchema)