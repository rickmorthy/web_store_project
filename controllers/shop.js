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
   Product.findAll()
          .then(prod => {
              console.log(prod);
              
            res.render('shop/product-list',{
            product: prod
            })
          }).catch((err) => {
              console.log(err);
              
          })
};

exports.productDetails = (req,res,next) => {
   const id = req.params.id;
   console.log('THIS IS ID => '+id);
   Product.findByPk(id).then(prod => {
       
    res.render('shop/product-detail',{
        product:prod,
        title:prod.title
    }).catch(err => {
        console.log(err);
    })
})
};