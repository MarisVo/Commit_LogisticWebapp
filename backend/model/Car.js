import mongoose from "mongoose"
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
        }
    },
    { timestamps: true }
)

export default mongoose.model('cars', CarSchema)