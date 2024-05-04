const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        require: true
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    }]
})

module.exports = mongoose.model('Product', productSchema);