const express = require('express');

const router = express.Router();
const shop = require('../controllers/shop');

router.get('/',shop.getIndex);
router.get('/products',shop.productList);
router.get('/:productId',shop.productDetails);

module.exports = router;