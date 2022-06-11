import mongoose from "mongoose"
const { Schema } = mongoose

const ApplicantSchema = new Schema(
    {
        
    },
    { timestamps: true }
)

export default mongoose.model('applicants', ApplicantSchema)