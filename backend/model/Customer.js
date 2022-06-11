import mongoose from "mongoose"
const { Schema } = mongoose

const CustomerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            default: null
        },
        discription: {
            type: String,
            default: null
        },
        customer_type: {
            type: String,
            enum: ['business', 'passers', 'intermediary'],
            default: 'passers',
            required: true
        },
        rank_passers: {
            type: {
                point: Number,
                level: {
                    type: String,
                    enum: ['titan', 'gold', 'silver', 'bronze', 'unrank']
                }
            },
            default: {
                point: 0,
                level: 'unrank'
            }
        },
        companyTaxcode_business: {
            type: String,
            default: null
        }
    },
    { timestamps: true }
)

export default mongoose.model('customers', CustomerSchema)