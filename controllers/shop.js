const Product = require('../models/shop');
const Helper = require('../models/helpers');
const Cart = require('../models/cart');

exports.getIndex = (req,res,next) => {
    // console.dir(Helper.getImages());
    Helper.getImages.then(result => {
        console.log(result);
        res.render('main/main',{
            carousel:result[0],
            path:result[1]
        });
        
    });
};

exports.productList = (req,res,next) => {
   Product.findAll()
          .then(prod => {
            //   console.log(prod);
              console.log(prod.length);
              
            res.render('shop/product-list',{
            product: prod
            })
          }).catch((err) => {
              console.log(err);
              
          })
};

exports.productDetails = (req,res,next) => {
   const id = req.params.id;
//    console.log('THIS IS ID => '+id);
   Product.findByPk(id).then(prod => {
       
    res.render('shop/product-detail',{
        product:prod,
        title:prod.title
    }).catch(err => {
        console.log(err);
    })
})
};

exports.postCart = (req,res,next) => {
    const id = req.body.id;
    // let test = req.user;
    console.log(req.user.cart);
    
    req.user
        .getCart()
        .then(cart => {
            console.log(cart);
            return cart.addProducts(cart);
        })
        .catch(err => {
            console.log(err);
            
        })
    // console.log(test);
    
};

exports.getCart = (req,res,next) => {
    // console.log(req.user.getCart());
    
    req.user
    .getCart()
    .then(cart => {
        console.log(cart);
        
        return cart
            .getProducts()
            .then(product => {
                res.render('shop/cart',{
                    product:product,
                    title:'My cart'
                })
            .catch(err => {
                console.log(err);
            })    
            })
    })
    .catch(err => {
        console.log(err);
    })
};