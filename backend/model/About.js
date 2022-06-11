import mongoose from "mongoose"
const { Schema } = mongoose

const AboutSchema = new Schema(
    {
        discription: {
            type: String
        },
        vision: {
            type: String
        },
        values: {
            type: String
        },
        logo: {
            type: String,
            default: null
        },
        banners: {
            type:[{type:String}],
            default: []
        }
    },
    { timestamps: true }
)

export default mongoose.model('aboutus', AboutSchema)