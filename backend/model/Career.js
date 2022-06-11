import mongoose from "mongoose"
const { Schema } = mongoose

const CareerSchema = new Schema(
    {
        
    },
    { timestamps: true }
)

export default mongoose.model('careers', CareerSchema)