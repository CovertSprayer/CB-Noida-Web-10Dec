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
    }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);