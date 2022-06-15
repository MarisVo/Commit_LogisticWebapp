import mongoose from "mongoose"
import { RETURN_ZONE } from "../constant"
const { Schema } = mongoose

const DistanceSchema = new Schema(
    {
        provinceA: {
            type: String,
            required: true
        },
        provinceB: {
            type: String,
            required: true
        },
        zonecode: {
            type: String,
            enum: Object.keys(RETURN_ZONE),
            required: true
        },
        distance: {
            type: Number
        }
    },
    { timestamps: true }
)

DistanceSchema.index({ provinceA: 1, provinceB: 1 }, { unique: true })

export default mongoose.model('distances', DistanceSchema)