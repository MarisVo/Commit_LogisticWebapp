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
            required: true
        },
        street: {
            type: String,
            required: true
        },
        ward: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        lon: {
            type: String,
        },
        lat: {
            type: String,
        }
    },
    { timestamps: true }
)

export default mongoose.model('warehouses', WarehouseSchema)