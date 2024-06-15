const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    author: String,
    text: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema);