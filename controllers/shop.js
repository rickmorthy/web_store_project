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
    const quantity = req.body.quantity;
    let local_cart;

    // Product.findAll({where:{id:id}})
    Product.findByPk(id)
    .then(result => {
        console.log('HERE');
        console.log(result);
        
    });
    // return Product.findByPk(id);
            // console.log(prod);
    req.user
        .getCart()
        .then(cart => {
            local_cart = cart;
        })
        .then(item => {
            return Product.findByPk(id) 
        })
        .then(product => {
            return local_cart.addProducts(product,{
                through:{quantity:quantity}
            });
        })
        .then(result => {
            res.redirect('products');
        })
        .catch(err => {
            console.log(err);
            
        })
    // console.log(test);
    
};

exports.getCart = (req,res,next) => {
    console.log(req.user.cart);
    
    req.user
    .getCart()
    .then(cart => {
        
        return cart
            .getProducts()
            .then(product => {
                console.log(product);
                
                res.render('shop/cart',{
                    product:product,
                    title:'My cart'
                })
            })
            .catch(err => {
                console.log(err);
            })    
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postDeleteCartItem = (req,res,next) => {
    let id = req.body.id;
    req.user
    .getCart()
    .then(cart => {
        console.log(cart);
        
        return cart.getProducts({where:{id:id}});
    })
    .then(product => {
        // console.log('PRODUCT');
        // console.log(product[0]);
        // console.log('END PRODUCT');
        return product[0].cartItem.destroy();
    })
    .then(result => {
        console.log('REDIRECT');
        
        res.redirect('/cart');
    })
    .catch(err => {
        console.log(err);
    })
}