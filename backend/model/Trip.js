import mongoose from "mongoose"
const { Schema } = mongoose

const TripSchema = new Schema(
    {
        origin: {
            type: Schema.Types.ObjectId,
            ref: 'warehouses',
            required: true
        },
        destination: {
            type: Schema.Types.ObjectId,
            ref: 'warehouses',
            required: true
        },
        car: {
            type: Schema.Types.ObjectId,
            ref: 'cars',
            required: true
        },
        driver: {
            type: Schema.Types.ObjectId,
            ref: 'staffs',
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('trips', TripSchema)