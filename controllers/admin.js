const Product = require('../models/shop');

exports.adminMenu = (req,res,next) => {
    
    res.render('admin/admin');
}

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        title:'Add product form',
        edit:false
    })
}
exports.postEditProduct = (req,res,next) => {
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    console.log(id);
    
    Product.findByPk(id)
    .then(product => {
            product.title = title;
            product.imageUrl = imageUrl;
            product.price = price;
            product.description = description;
            return product.save();
        })
        .then(result => {
            console.log('Product was updated');
            res.redirect('/products');
        })
        .catch(err => {
        console.log(err);
    })
}

exports.getEditProduct = (req,res,next) => {
    const edit = req.query.edit;
    if(edit){
        const id = req.params.id;
        Product.findByPk(id).then(prod => {
            if (!prod) {
                res.redirect('admin');
            }else{
                res.render('admin/add-product',{
                    title:'Edit product form',
                    edit:edit,
                    product:prod,
                })
            }
        })
    }else{
        res.redirect('/');
    }
}
exports.getAllProducts = (req,res,next) => {
    Product.findAll()
    .then( prod => {
        res.render('admin/products',{
            product:prod
        })
    })
}

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    console.log(title);
    
    Product.create({
        title:title,
        imageUrl:imageUrl,
        price:price,
        description:description
    }).then(result => {
        console.log("Product was created");
        res.redirect('products');
    }).catch(err => {
        console.log(err);
    })
}
exports.deleteProduct = (req,res,next) => {
    console.log('IM HERE');
    
    const id = req.body.id;
    Product.findByPk(id)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            res.redirect('products');
        })
        .catch(err => {
            console.log(err);
        })
}
