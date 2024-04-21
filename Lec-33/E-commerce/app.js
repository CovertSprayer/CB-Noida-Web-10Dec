const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-Com-Dec10')
    .then(()=> console.log('E-Com-Dec10 connected'))
    .catch(err => console.log(err))

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home')
})

const productRoutes = require('./routes/product.routes');
app.use(productRoutes);

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server is up at \nhttp://localhost:${PORT}`)
})