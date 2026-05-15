
const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next) => {
    console.log('Shop Router');
    const product = req.product;
    res.send(`
        <h1>Shop Router</h1>
        `);
});

module.exports = router;