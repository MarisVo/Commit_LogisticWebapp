import mongoose from "mongoose"
import { COST } from "../constant.js"
const { Schema } = mongoose

const CostOfCarSchema = new Schema(
    {
        car: {
            type: Schema.Types.ObjectId,
            ref: 'cars',
            required: true
        },
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
)

export default mongoose.model('cost_of_cars', CostOfCarSchema)