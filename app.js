const ex = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./util/db');

let bodyParser = require('body-parser');
let dirname = path.dirname(process.mainModule.filename); 

const app = ex();

const shopRoutes = require('./routes/shop');
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(ex.static(path.join(dirname,'public')));
app.use(ex.static(path.join(dirname,'node_modules')));
app.use(ex.static(path.join(dirname,'media')));



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