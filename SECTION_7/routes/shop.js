
const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next) => {
    console.log('Shop Router');

    res.send('<h1>Method: GET, Path: "/product"</h1>');
});

module.exports = router;