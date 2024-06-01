const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const OrderModel = require('../../models/Order.model');
const ProductModel = require('../../models/Product.model');
const { isLoggedIn } = require('../../middlewares/auth');
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

router.post('/products/:productId/order', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const instance = new Razorpay({
        key_id: RAZORPAY_KEY_ID,
        key_secret: RAZORPAY_KEY_SECRET,
    });
    const product = await ProductModel.findById(productId);

    var options = {
        amount: product.price * 100,
        currency: "INR",
    };

    const orderInstance = await instance.orders.create(options);
    const order = await OrderModel.create({
        _id: orderInstance.id,
        product: productId,
        userId: req.user._id,
        amount: parseFloat(orderInstance.amount) / 100
    })

    res.status(201).json({
        order,
        success: true
    })

})

// router.get('/get-key', (req, res)=>{
//     res.json({
//         RAZORPAY_KEY_ID
//     })
// })

router.post('/verify-payment', async (req, res) => {
    const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
    } = req.body

    const { validatePaymentVerification } = require('../../node_modules/razorpay/dist/utils/razorpay-utils');

    const isValid = validatePaymentVerification({ "order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, razorpay_signature, RAZORPAY_KEY_SECRET);

    if (isValid) {
        await OrderModel.findByIdAndUpdate(razorpay_order_id, {
            paymentStatus: 'success'
        });

        res.send(
            `
                <h1>Payment Status: ${isValid}</h1>
                <h2>PaymentId: ${razorpay_payment_id}</h2>
            `
        )
    }
    else {
        await OrderModel.findByIdAndUpdate(razorpay_order_id, {
            paymentStatus: 'failed'
        });

        res.send(
            `
                <h1>Payment Status: ${isValid}</h1>
                <h2>PaymentId: ${razorpay_payment_id}</h2>
            `
        )
    }

    
})

module.exports = router;
