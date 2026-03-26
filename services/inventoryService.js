const productRepository = require("../repositories/productRepository");
const orderRepository = require("../repositories/orderRepository");
const {sendLowStockAlert} = require("./emailService");

class InventoryService {

    async getAllProducts(){
        return await productRepository.findAllProducts();
    }

    async purchaseProduct(productId, quantity){
        const product = await productRepository.findProductById(productId);
       
        if(!product){
           throw new Error("Product not found");
        }

        const stockNum = Number(product.stock);
        const qtyNum = Number(quantity);

        if(stockNum < qtyNum){
            throw new Error("Insufficient stock");
        }
        
        const totalPrice = qtyNum * Number(product.price);
        const order = await orderRepository.createOrder(productId, qtyNum, totalPrice);

        await productRepository.updateStock(product, qtyNum);
        if(product.stock<= product.lowStockThreshold){
            await sendLowStockAlert(product);
        }

        return order;
    }

}

module.exports = new InventoryService();