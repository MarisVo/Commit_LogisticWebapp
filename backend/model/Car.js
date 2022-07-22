import mongoose from "mongoose"
import { COST } from "../constant.js"
const { Schema } = mongoose

const CarSchema = new Schema(
    {
        car_plate: {
            type: String,
            required: true,
            unique: true
        },
        car_type: {
            type: String,
            required: true
        },
        cost: [
            {
                cost_type: {
                    type: String,
                    enum: Object.values(COST),
                    required: true
                },
                amount: {
                    type: Number,
                    required: true // amount of money
                },
                in_progress: {
                    type: Schema.Types.ObjectId,
                    ref: 'bills'
                },
                detail: String
            },
            { timestamps: true }
        ]
    },
    { timestamps: true }
)

export default mongoose.model('cars', CarSchema)