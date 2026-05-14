
const express = require("express");

const router = express.Router();

router.post("/add-product", (req, res, next) => {
    console.log('Admin Router');
    console.log(req.body);

    res.send('<h1>Method: POST, Path: "/add-product"</h1>');
});

module.exports = router;