const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
      product_id: { type: String, required: true},
      quantity: { type: Number},
      price: { type: Number, required: true, default: 0},
    },
    {
        timestamps: true,
        versionKey: false,
    }

);


module.exports = mongoose.model("orders",orderSchema)