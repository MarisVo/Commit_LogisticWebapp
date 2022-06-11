import mongoose from "mongoose"
const { Schema } = mongoose

const OrderSchema = new Schema(
    {
        products: [{
            type: {
                product_name: String,
                quantity: Number,
                unit: {
                    type: String,
                    enum: ['kg','ton','m3']
                }
            }
        }],
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'customers'
        },
        trips: [
            {
                type: Schema.Types.ObjectId,
                ref: 'trips'
            }
        ],
        receiver: {
            type: {
                name: String,
                phone: String,
                identity: String
            }
        }
    },
    { timestamps: true }
)

export default mongoose.model('orders', OrderSchema)