import mongoose from "mongoose"
import { STAFF } from "../constant.js"
const { Schema } = mongoose

const StaffSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        staff_type: {
            type: String,
            enum: Object.values(STAFF),
            required: true,
            default: STAFF.STAFF
        }
    },
    { timestamps: true }
)

export default mongoose.model('staffs', StaffSchema)
