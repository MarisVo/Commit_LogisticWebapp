import mongoose from "mongoose"
const { Schema } = mongoose

const BillSchema = new Schema(
    {
        product_shipments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'product_shipments'
            }
        ]
    },
    { timestamps: true }
)

export default mongoose.model('bills', BillSchema)