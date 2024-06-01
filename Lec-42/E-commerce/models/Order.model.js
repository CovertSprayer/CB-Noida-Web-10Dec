const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    amount: {
        type: Number,
        require: true
    },
    paymentStatus: {
        type: String,
        default: 'pending'
    }
})

module.exports = mongoose.model('Order', orderSchema);