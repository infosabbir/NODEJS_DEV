
const express = require("express");
const { getAllProduct } = require("../controller/product");

const router = express.Router();

router.get("/products", getAllProduct);

module.exports = router;