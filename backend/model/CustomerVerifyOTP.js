import mongoose from "mongoose"
import User from "./User.js"
const { Schema } = mongoose

const CustomerVerifyOTPSchema = new Schema(
    {
        otp_code: {
            type: String,
            required:true,
            unique:true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            unique: true
        }
    },
    { timestamps: true }
)

CustomerVerifyOTPSchema.pre('deleteOne', (next)=>{
    User.remove({_id: this.user, isActive: false}).exec()
    console.log('exec')
    next()
})

export default mongoose.model('customer_verify_otps', CustomerVerifyOTPSchema)