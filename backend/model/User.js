import mongoose from "mongoose"
const { Schema } = mongoose

const UserSchema = new Schema(
    {
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            unique: true,
            required: true
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: 'customers' || 'staffs'
        }
    },
    { timestamps: true }
)

export default mongoose.model('users', UserSchema)