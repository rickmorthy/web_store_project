const Product = require('../models/shop');
const Helper = require('../models/helpers');

exports.getIndex = (req,res,next) => {
    // console.dir(Helper.getImages());
    Helper.getImages.then(result => {
        console.log(result);
        res.render('main/main',{
            carousel:result[0],
            path:result[1]
        });
        
    });
    // console.log(images+'THIS');
    // console.log(typeof Helper);
    
    
       
};

exports.productList = (req,res,next) => {
   Product.fetchAll(prod => {
       res.render('/shop/product-list',{
           products: prod
       })
   })
};

exports.productDetails = (req,res,next) => {
//    Product.productId(prod => {
//        res.render('/shop/productDetail',{
//            product:prod,
//            title:prod.title
//        })
//    })
};