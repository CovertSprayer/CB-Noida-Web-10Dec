const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./models/user.model');
const session = require('express-session');
mongoose.connect('mongodb://127.0.0.1:27017/auth-demo-10Dec');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(session({
    secret: 'this-is-secret',
    resave: false
}))

app.get('/', (req, res) => {
    console.log(req.session);
    if(req.session.user)
        res.render('home', { user: req.session.user });
    else
        res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const user = await userModel.create({ username, password, email });
    res.redirect('/login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user || (user.password !== password)) {
        return res.send('Invalid Username or Password');
    }
    req.session.user = user;
    res.redirect('/');
})

app.get('/logout', (req, res)=>{
    delete req.session["user"];
    res.redirect('/login');
})

// app.get('*', (req, res)=>{
//     res.redirect('/login');
//     // res.send('404 NOT FOUND!!');
// })

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});

/**
 * hello -> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
 * hello -> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
 * helo ->  f4e454f802b88d2f64168ff1742e8cf413fd677d38b87cbefb45821f8981b912
 * 1234 -> 03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4
 * 
 */

