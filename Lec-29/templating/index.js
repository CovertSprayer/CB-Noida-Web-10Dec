const express = require('express');
const app = express();
const path = require('path');

console.log(__dirname);
console.log(process.cwd());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('Working Fine!');
    // res.sendFile(path.join(__dirname, 'views', 'home.html'))
    let heading = 'EJS Home File || Learing EJS';
    let para = 'Some random generated text';
    let randomNum = Math.floor(Math.random() * 10);
    res.render('home', { heading, para, randomNum })
})

app.get('/todos', (req, res) => {
    const todos = ['Do some Coding', 'Play Guitar at 5', 'Go to Market', 'Buy Something']
    res.render('todo', { todos })
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

// app.get('/public/js/script.js', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'js', 'script.js'))
// })

// app.get('/public/css/home.css', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'css', 'home.css'))
// })

app.get('*', (req, res)=>{
    res.send('404 NOT FOUND!!!')
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});