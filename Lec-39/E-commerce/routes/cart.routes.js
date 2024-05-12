const express = require('express');
const { isLoggedIn } = require('../middlewares/auth');
const UserModel = require('../models/User.model');
const router = express.Router();

router.get('/user/cart', (req, res)=>{
    res.render('cart/index')
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

module.exports = router;