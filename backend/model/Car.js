import mongoose from "mongoose"
import { COST } from "../constant.js"
import { CAR_TYPE } from "../constant.js"
const { Schema } = mongoose

const CarSchema = new Schema(
    {
        plate: {
            type: String,
            required: true,
            unique: true
        },
        car_type: {
            type: String,
            enum: Object.values(CAR_TYPE),
            default: CAR_TYPE.TON_8,
            required: true
        },
        volumn: {
            type: Number,
            required: true
        },
        tonnage: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('cars', CarSchema)