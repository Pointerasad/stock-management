require("dotenv").config();

const mongoose = require("mongoose");
const product = require("./models/product");

const seedProducts = [
    {name: "Laptop Pro" , sku: "LP-01", stock: 20, lowStockThreshold: 5, price: 1000},
    {name: "Wireless Mouse" , sku: "WM-02", stock: 50, lowStockThreshold: 10, price: 25},
    {name: "Mechanical Keyboard" , sku: "MK-03", stock: 15, lowStockThreshold: 5, price: 80},
    {name: "HD Monitor" , sku: "HM-04", stock: 30, lowStockThreshold: 3, price: 200},
    {name: "USB-C Hub" , sku: "UH-05", stock: 10, lowStockThreshold: 25, price: 40},
    {name: "Noise Cancelling Headphone" , sku: "NH-06", stock: 25, lowStockThreshold: 2, price: 150},
    {name: "Ergonomic Chair" , sku: "EC-07", stock: 8, lowStockThreshold: 2, price: 250},
    {name: "Standing Desk" , sku: "SD-08", stock: 5, lowStockThreshold: 2, price: 400},
    {name: "Webcam 1080p" , sku: "WC-09", stock: 40, lowStockThreshold: 10, price: 60},
    {name: "External SSD 1TB" , sku: "ES-10", stock: 12, lowStockThreshold: 3, price: 120}
];

const seed = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        await product.deleteMany();
        await product.insertMany(seedProducts);
        console.log("Seed data inserted successfully");
    }catch(error){
       console.log("error seeding data", error);
    }finally{
        mongoose.disconnect();
    }
};

seed();
