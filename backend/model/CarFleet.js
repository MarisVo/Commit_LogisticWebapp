import mongoose from "mongoose"
const { Schema } = mongoose

const CarFleetSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        turnover: [
            {
                bill: {
                    type: Schema.Types.ObjectId,
                    ref: 'bills',
                    required: true
                },
                income: {
                    type: Number,
                    required: true
                }
            },
            { timestamps: true }
        ]
    },
    { timestamps: true }
)

export default mongoose.model('car_fleets', CarFleetSchema)
