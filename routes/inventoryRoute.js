const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventoryController.js");
const authVerification = require("../middlewares/authVerification.js");


router.get("/all-products", authVerification,inventoryController.getProducts);
router.post("/purchase-product", authVerification,inventoryController.purchseProduct);

module.exports = router;