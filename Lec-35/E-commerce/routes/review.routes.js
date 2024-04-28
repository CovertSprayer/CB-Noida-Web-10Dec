// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const ProductModel = require('../models/Product.model');
const ReviewModel = require('../models/Review.model');

router.post('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { rating, comment } = req.body;

    const review = await ReviewModel.create({ rating, comment });

    const product = await ProductModel.findById(productId);
    product.reviews.push(review._id);
    await product.save();

    // res.redirect(`/products/${productId}`);
    res.redirect('back');
})

module.exports = router;