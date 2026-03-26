const Order = require("../models/order");

class OrderRepository{
    
    async createOrder(productId, quantity, totalPrice){
          const order = new Order({
               product_id: productId,
               quantity: quantity,
               price: totalPrice
          });
          return await order.save();
    }

}

module.exports = new OrderRepository();