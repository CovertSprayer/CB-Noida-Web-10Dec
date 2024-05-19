const express = require('express');
const router = express.Router();
const { productSchema } = require('../validation/productSchema');
const { validator } = require('../middlewares/validator');
const { isLoggedIn, isSeller } = require('../middlewares/auth');
const {
    getAllProducts,
    productForm,
    createProduct,
    getProduct,
    getEditForm,
    editProduct,
    deleteProduct
} = require('../controllers/product');

router.route('/products')
    .get(getAllProducts)
    .post(isLoggedIn, validator(productSchema), createProduct)

router.route('/products/new')
    .get(isLoggedIn, isSeller, productForm)

router.route('/products/:id')
    .get(getProduct)
    .put(isLoggedIn, editProduct)
    .delete(isLoggedIn, deleteProduct)

router.route('/products/:id/edit')
    .get(isLoggedIn, getEditForm)

module.exports = router;