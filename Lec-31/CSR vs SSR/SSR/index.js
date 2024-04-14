const express = require('express');
const app = express();
const path = require('path');

const todos = ['Buy Something', 'Do so gaming', 'Watch Movies']

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { todos });
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});