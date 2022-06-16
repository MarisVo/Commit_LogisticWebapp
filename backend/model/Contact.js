import mongoose from "mongoose"
const { Schema } = mongoose

const ContactSchema = new Schema(
    {
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String,
        },
        tiktok: {
            type: String,
        },
        youtube: {
            type: String,
        }
    },
    { timestamps: true }
)

export default mongoose.model('contact', ContactSchema)