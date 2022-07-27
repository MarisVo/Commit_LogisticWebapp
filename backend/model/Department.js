import mongoose from "mongoose"
const { Schema } = mongoose

const DepartmentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: null
        },
        location: {
            type: String,
            default: null
        },
        director: {
            type: String,
            default: null
        },
        scale: {
            type: Number
        },
        careers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'careers'
            }
        ],
    },
    { timestamps: true }
)

export default mongoose.model('department', DepartmentSchema)