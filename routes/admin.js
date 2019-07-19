const Product = require('../models/shop');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        title:'Add product',
        editing:false
    })
}