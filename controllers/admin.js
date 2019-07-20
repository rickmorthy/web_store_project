const Product = require('../models/shop');

exports.adminMenu = (req,res,next) => {
    
    res.render('admin/admin');
}

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        title:'Add product form',
        editing:false
    })
}
exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.create({
        title:title,
        imageUrl:imageUrl,
        price:price,
        description:description
    }).then(result => {
        res.redirect('products');
    }).catch(err => {
        console.log(err);
    })
}

exports.getEditProduct = (res,req,next) => {
    const edit = req.body;
    console.log(edit);
    
    // console.log('THIS IS PROD =>'+edit);
    if(edit){
        const id = req.params.id;
        Product.findByPk(id).then(prod => {
            
            if (!prod) {
                res.redirect('admin');
            }else{
                // res.render('add-product',{
                //     title:'Edit product form',
                //     edit:edit,
                //     product:prod,
                // })

            }
        })
    }else{
        res.redirect('/');
    }
}
exports.getAllProducts = (req,res,next) => {
    Product.findAll().then( prod => {
        
        res.render('admin/products',{
            product:prod
        })
    })
}

// exports.deleteProduct = (req,res,next) => {
//     Product.
// }
