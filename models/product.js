const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true},
      sku: { type: String, required: true,unique: true},
      stock: { type: Number, required: true, default: 0},
      lowStockThreshold: { type: Number, required: true, default: 5},
      price: { type: Number, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }

);


module.exports = mongoose.model("product",productSchema)