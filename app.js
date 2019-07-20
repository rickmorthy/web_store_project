const ex = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./util/db');

let bodyParser = require('body-parser');
// let dirname = path.dirname(process.mainModule.filename); 

const app = ex();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','views');
// console.log(__dirname);

app.use('/public',ex.static(path.join(__dirname, 'public')));
app.use('/script',ex.static(path.join(__dirname,'node_modules')));
app.use('/media',ex.static(path.join(__dirname,'media')));



app.use('/admin',adminRoutes);
app.use(shopRoutes);

sequelize
.sync()
.then((result) => {
    // console.log(result);
})
.catch(err => {
    // console.log(err);
})
app.listen(3000);