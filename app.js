const ex = require('express');
const path = require('path');

const app = ex();

const productController = require('./controllers/shop');
const adminController = require('./controllers/admin');
app.set('view engine','ejs');
app.set('views','views');




app.use('/admin',adminController);
app.use(productController);

app.listen(3000);