import mongoose from "mongoose"
const { Schema } = mongoose

const WarehouseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('warehouses', WarehouseSchema)