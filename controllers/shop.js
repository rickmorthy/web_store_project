const Product = require('../models/product');

exports.getIndex = (req,res,next) => {
       res.render('shop/all');
};

exports.productList = (req,res,next) => {
   Product.fetchAll(prod => {
       res.render('/shop/product-list',{
           products: prod
       })
   })
};

exports.productDetail = (req,res,next) => {
   Product.productId(prod => {
       res.render('/shop/productDetail',{
           product:prod,
           title:prod.title
       })
   })
};