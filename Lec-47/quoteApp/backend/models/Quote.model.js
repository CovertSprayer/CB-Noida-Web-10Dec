const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    author: String,
    text: String,
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema);