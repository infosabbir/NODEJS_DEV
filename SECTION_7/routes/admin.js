
const express = require("express");

const { addProduct } = require("../controller/product");

const router = express.Router();

router.post("/add-product", addProduct);


module.exports = router;