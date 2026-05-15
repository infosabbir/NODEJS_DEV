const express = require("express");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    console.log('always runs');
    next();
});

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);



app.listen(3000, () => console.log('Listening port on 3000'))