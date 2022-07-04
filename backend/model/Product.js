import mongoose from "mongoose";
import { PRODUCT_UNIT } from "../constant";
const { Schema } = mongoose;

const ProductSchema = new Schema(
<<<<<<< HEAD
  {
    name: {
      type: String,
      required: true,
=======
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            enum: Object.values(PRODUCT_UNIT),
            required: true
        },
        product_shipments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'product_shipments'
            }
        ]
>>>>>>> 4090348d48be56fb6c4e0beb1bfe8b53bd10970e
    },
    quantity: Number,
    unit: {
      type: String,
      enum: Object.values(PRODUCT_UNIT),
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", ProductSchema);
