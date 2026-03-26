const Product = require("../models/product");


class ProductRepository{

    async findAllProducts(){
        return await Product.find();
    }

    async findProductById(id){
        return await Product.findById(id);
    }

    async updateStock(product, quantity){
         product.stock -= quantity;
         return await product.save();
    }

}

module.exports =new ProductRepository();