import mongoose from "mongoose"
import Customer from "./Customer.js"
import Staff from "./Staff.js"
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
        },
        isActive: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    { timestamps: true }
)

UserSchema.pre('deleteOne', (next)=>{
    Customer.remove({_id: this.role}).exec()
    Staff.remove({_id: this.role}).exec()
    next()
})

export default mongoose.model('users', UserSchema)