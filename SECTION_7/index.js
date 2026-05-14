const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    console.log('root route');
    res.send('<h1>response from root (/) route!!</h1>');
});

app.post("/add-product", (req, res, next) => {
    console.log(req.body);
    console.log('first middleware');
    res.send('<h1>response from the /add-product Route!</h1>');
});

app.get("/product", (req, res, next) => {
    console.log('Second Middleware');
    res.send('<h1>response from the /product route!</h1>');
})

app.listen(3000, () => console.log('Listening port on 3000'))