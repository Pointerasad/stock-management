
const inventoryService = require("../services/inventoryService");

class InventoryController {

    async getProducts(req, res){
        try{
          const products = await inventoryService.getAllProducts();
          res.json(products);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    async purchseProduct(req, res){
        try{
          const { productId, quantity} = req.body;
          const results = await inventoryService.purchaseProduct(productId,quantity);
          res.json(results);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}

module.exports = new InventoryController();