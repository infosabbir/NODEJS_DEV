
const express = require("express");

const router = express.Router();

router.post("/add-product", (req, res, next) => {
    console.log('Admin Router');

    console.log(req.body);

    res.send('<h1>Admin Router</h1>');
});

router.delete("/delete-product", (req, res, next) => {
    
});

module.exports = router;