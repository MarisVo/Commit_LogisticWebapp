import mongoose from "mongoose"
const { Schema } = mongoose

const ProductShipmentSchema = new Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        size: {
          type: {
            height: Number,
            width: Number,
            length: Number
          }
        },
        value: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model('product_shipments', ProductShipmentSchema)