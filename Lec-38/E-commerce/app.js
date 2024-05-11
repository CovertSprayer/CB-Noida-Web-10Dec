const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModel = require('./models/User.model');

mongoose.connect('mongodb://127.0.0.1:27017/E-Com-Dec10')
    .then(() => console.log('E-Com-Dec10 connected'))
    .catch(err => console.log(err))

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "weneedsomesecret",
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use((req, res, next) => {
    // console.log(req.user);
    res.locals.user = req.user;
    next();
})

app.get('/', (req, res) => {
    res.render('home')
})

const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const authRoutes = require('./routes/auth.routes');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is up at \nhttp://localhost:${PORT}`)
})