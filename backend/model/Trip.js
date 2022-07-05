import mongoose from "mongoose"
const { Schema } = mongoose

const TripSchema = new Schema(
    {
        warehouse_chain: [
            {
                warehouse: {
                    type: Schema.Types.ObjectId,
                    ref: 'warehouses'
                },
                check_in: {
                    type: Boolean,
                    required: true
                }
            }
        ]
    },
    { timestamps: true }
)

export default mongoose.model('trips', TripSchema)