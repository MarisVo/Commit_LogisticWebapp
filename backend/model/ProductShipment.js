import mongoose from "mongoose"
const { Schema } = mongoose

const ProductShipmentSchema = new Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'product_shipments'
        }
    },
    { timestamps: true }
)

export default mongoose.model('product_shipments', ProductShipmentSchema)