const express = require('express');

const router = express.Router();
const controller = require('../controllers/admin');

router.get('/',controller.adminMenu);
router.get('/add-product',controller.getAddProduct);
router.post('/add-product',controller.postAddProduct);
router.get('/products',controller.getAllProducts);
router.get('/edit-product/:id',controller.getEditProduct);
router.post('/edit-product',controller.postEditProduct);
router.post('/delete-product',controller.deleteProduct);


module.exports = router;