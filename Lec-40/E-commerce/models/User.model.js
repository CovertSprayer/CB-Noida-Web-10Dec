const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    role: {
        type: String,
        required: true
    },
    cart: [
        {
            _id: false,
            productId:{
                type: mongoose.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                min: 1,
                default: 1,
            }
        }
    ],
    wishList: [
        {
            _id: false,
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);