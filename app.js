
// LIBS AND FRAMEWORKS
const ex = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./util/db');
let bodyParser = require('body-parser');
const app = ex();

// MODELS
const Product = require('./models/shop');
const User = require('./models/user');
const CartItem = require('./models/cart-item');
const Cart = require('./models/cart');


// ROUTES
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// MIDDLEWARE ENGINES
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','views');

// PATH
app.use('/public',ex.static(path.join(__dirname, 'public')));
app.use('/script',ex.static(path.join(__dirname,'node_modules')));
app.use('/media',ex.static(path.join(__dirname,'media')));





// MYSQL 
Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(Cart,{through:CartItem});

sequelize
// .sync({force:true})
.sync()
.then((result) => {
    // console.log(result);
})
.catch(err => {
    // console.log(err);
})

//LISTEN
app.listen(3000);