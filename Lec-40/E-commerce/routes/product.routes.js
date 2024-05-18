const express = require('express');
const Product = require('../models/Product.model');
const router = express.Router();
const { productSchema } = require('../validation/productSchema');
const { validator } = require('../middlewares/validator');
const { isLoggedIn, isSeller } = require('../middlewares/auth');

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('product/index', { products });
})

router.get('/products/new', isLoggedIn, isSeller, (req, res) => {
    res.render('product/new');
})

router.post('/products',isLoggedIn, validator(productSchema), async (req, res) => {
    const { title, price, description, image } = req.body;

    // const {error, value} = productSchema.validate({ title, price, description, image })
    // if(error) return res.send('Invalid Data');

    // return res.send('from product route')
    await Product.create({ title, price, description, image });

    req.flash('success', 'Product added successfully!!')
    res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    // const products = await Product.find({_id: id});
    const product = await Product.findById(id).populate('reviews');
    res.render('product/show', { product });
})

router.get('/products/:id/edit', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('product/edit', { product });
})

router.put('/products/:id', isLoggedIn, async (req, res) => {
    const { title, description, image, price } = req.body;
    const { id } = req.params;
    const existingProduct = await Product.findById(id);

    existingProduct.title = title;
    existingProduct.description = description;
    existingProduct.image = image;
    existingProduct.price = price;

    await existingProduct.save();

    req.flash('success', 'Product updated successfully!!')
    res.redirect('/products');
})

router.delete('/products/:id', isLoggedIn, async (req, res) => {
   try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    req.flash('success', 'Product deleted successfully!!')
    res.redirect('/products');
   } 
   catch (err) {
    req.flash('error', 'Something Went wrong!!');
    console.log(err);
   }
})

module.exports = router;