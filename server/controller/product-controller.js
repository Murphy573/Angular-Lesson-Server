;
const express = require('express'),
router = express.Router();

const productService = require('../service/product-service');

router.get('/getProducts', function (req, res) {
    res.json(productService.getProducts());
});

router.get('/getProductById/:id', function (req, res) {
    res.json(productService.getProductByID(req.params['id']));
});

module.exports =  router;