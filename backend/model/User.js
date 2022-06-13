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
            unique: true
        },
        phone: {
            type: String,
            unique: true
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

UserSchema.pre('validate', function (next) {
    let hasProvider = false;
    if ((this.email && this.email.length > 0) || (this.phone && this.phone.length > 0)){
        hasProvider = true
    }
    return (hasProvider) ? next() : next(new Error('No Provider provided'));
});

UserSchema.pre('deleteOne', (next) => {
    Customer.remove({ _id: this.role }).exec()
    Staff.remove({ _id: this.role }).exec()
    next()
})

export default mongoose.model('users', UserSchema)