import mongoose from "mongoose"
const { Schema } = mongoose

const StaffSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        staff_type: {
            type: String,
            enum: ['admin', 'driver', 'shipper', 'staff'],
            required: true,
            default: 'staff'
        }
    },
    { timestamps: true }
)

export default mongoose.model('staffs', StaffSchema)
