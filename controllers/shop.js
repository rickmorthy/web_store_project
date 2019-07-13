const Product = require('../models/shop');

exports.getIndex = (req,res,next) => {
       res.render('all');
};

exports.productList = (req,res,next) => {
   Product.fetchAll(prod => {
       res.render('/shop/product-list',{
           products: prod
       })
   })
};

exports.productDetails = (req,res,next) => {
   Product.productId(prod => {
       res.render('/shop/productDetail',{
           product:prod,
           title:prod.title
       })
   })
};