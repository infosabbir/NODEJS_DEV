const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware');
})

app.listen(3000, () => console.log('Listening port on 3000'))