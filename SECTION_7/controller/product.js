const Product = require("../models/product");


exports.addProduct = async (req, res,) => {
    const product = new Product(req.body.name, req.body.price);

    try {

        await product.save();
    } catch (err) {
        res.status(500).json({ Error: err });
    }

    res.status(200).json({ message: 'Product added Succesfully!' });
}

exports.getAllProduct = (req, res,) => {
    const product = Product.findAll();

    res.status(200).json({ product });
}