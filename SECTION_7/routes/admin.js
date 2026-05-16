
const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.post("/add-product", (req, res,) => {
    const product = new Product(req.body.name, req.body.price);

    product.save();

    res.status(200).json({ message: 'Product added Succesfully!' });
});


module.exports = router;