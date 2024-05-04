const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/E-Com-Dec10')
    .then(() => console.log('E-Com-Dec10 connected'))
    .catch(err => console.log(err))

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home')
})

const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
app.use(productRoutes);
app.use(reviewRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is up at \nhttp://localhost:${PORT}`)
})