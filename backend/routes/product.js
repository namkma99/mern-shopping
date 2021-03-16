const express = require('express');
const router = express.Router();
const {getAllProducts,getProductsById} = require('../controller/ProductController')

router.get('/product',getAllProducts);

router.get('/product/:id',getProductsById);

module.exports = router;