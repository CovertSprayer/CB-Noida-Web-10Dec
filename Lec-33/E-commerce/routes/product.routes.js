const express = require('express');
const Product = require('../models/Product.model');
const router = express.Router();


router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('product/index', { products });
})

router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    // const products = await Product.find({_id: id});
    const product = await Product.findById(id);
    res.render('product/show', { product });
})

module.exports = router;