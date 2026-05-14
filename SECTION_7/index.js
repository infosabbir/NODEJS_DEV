const express = require("express");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    console.log('Root Router');
    res.send('<h1>response from root (/) route!!</h1>');
});

app.use(adminRoutes);

app.use(shopRoutes);



app.listen(3000, () => console.log('Listening port on 3000'))