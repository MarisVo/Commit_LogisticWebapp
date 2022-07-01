import mongoose from "mongoose"
const { Schema } = mongoose

const RoadSchema = new Schema(
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
        distance: {
            type: Number
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
        },
        bill: {
            type: Schema.Types.ObjectId,
            ref: 'bills',
        }
    },
    { timestamps: true }
)

export default mongoose.model('roads', RoadSchema)