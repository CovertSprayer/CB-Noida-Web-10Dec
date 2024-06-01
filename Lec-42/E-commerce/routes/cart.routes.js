const express = require('express');
const { isLoggedIn } = require('../middlewares/auth');
const UserModel = require('../models/User.model');
const router = express.Router();

router.get('/user/cart', isLoggedIn, async (req, res) => {
    const user = await UserModel.findById(req.user._id).populate('cart.productId');

    let totalPrice = 0;
    for (let item of user.cart) {
        totalPrice = totalPrice + (item.quantity * item.productId.price);
    }

    res.render('cart/index', { productsInCart: user.cart, totalPrice })
})

router.post('/products/:productId/cart', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await UserModel.findById(userId);
    const existingProduct = user.cart.find(product => product.productId == productId)

    // if (existingProduct){
    //     existingProduct.quantity++;
    // }else{
    //     user.cart.push({ productId });
    // }

    existingProduct ? existingProduct.quantity++ : user.cart.push({ productId })
    await user.save();

    res.redirect('back');
})

router.delete('/products/:productId/cart', isLoggedIn, async (req, res) => {
   try {
        const { productId } = req.params;
        const userId = req.user._id;

        const user = await UserModel.findById(userId);

        const existingProductIndex = user.cart.findIndex((item) => item.productId == productId);
        user.cart.splice(existingProductIndex, 1);
        await user.save();

        res.redirect('back');
   } 
   catch (err) {
        console.log(err);
        res.send('Something Went Wrong!!!')
   }
})

module.exports = router;