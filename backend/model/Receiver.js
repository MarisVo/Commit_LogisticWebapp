import mongoose from "mongoose"
const { Schema } = mongoose

const ReceiverSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        identity: {
            type: String,
            required: true,
            unique: true
        },
        street: {
            type: String,
            required: true
        },
        ward: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('receivers', ReceiverSchema)