import mongoose from "mongoose"
import { PRODUCT_UNIT } from "../constant"
const { Schema } = mongoose

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: Number,
        unit: {
            type: String,
            enum: Object.values(PRODUCT_UNIT)
        }
    },
    { timestamps: true }
)

export default mongoose.model('products', ProductSchema)