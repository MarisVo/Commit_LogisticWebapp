import mongoose from "mongoose"
import { PRODUCT_UNIT } from "../constant"
const { Schema } = mongoose

const OrderSchema = new Schema(
    {
        service: {
            type: Schema.Types.ObjectId,
            ref: 'delivery_services'
        },
        products: [{
            type: {
                product_name: String,
                quantity: Number,
                unit: {
                    type: String,
                    enum: Object.values(PRODUCT_UNIT)
                }
            }
        }],
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'customers'
        },
        trips: [
            {
                type: Schema.Types.ObjectId,
                ref: 'trips'
            }
        ],
        receiver: {
            type: {
                name: String,
                phone: String,
                identity: String
            }
        },
        total_price: {
            type: Number,
            default: null
        }
    },
    { timestamps: true }
)

export default mongoose.model('orders', OrderSchema)