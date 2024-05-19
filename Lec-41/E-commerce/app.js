require('dotenv').config();

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
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const mongo_URL = process.env.MONGO_URL;

mongoose.connect(mongo_URL)
    .then(() => console.log('E-Com-Dec10 connected'))
    .catch(err => console.log(err))

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    store: MongoStore.create({mongoUrl : mongo_URL}),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.activeURL = req.url;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');

    res.locals.noOfProductsInCart = req?.user?.cart?.reduce((acc, item) => {
        return item.quantity + acc;
    }, 0)
    next();
})

app.get('/', (req, res) => {
    res.render('home')
})

const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');

// ---------- APIs
const productAPI = require('./routes/api/product');
const paymentAPI = require('./routes/api/payment');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(productAPI);
app.use(paymentAPI);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is up at http://localhost:${PORT}`)
})