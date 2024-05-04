const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next)=>{
//     console.log('hello from middleware!')
//     // res.send('You hit a request!');
//     next();
// })

app.get('/', (req, res) => {
    res.render('index')
})

function convetToLowerCase(req, res, next) {
    console.log(req.body);
    const newText = req.body.text;
    req.body.text = newText.toLowerCase();

    next();
}

app.post('/submit-data', convetToLowerCase, (req, res) => {
    console.log(req.body);
    res.redirect('back');
})

function checkPassword(req, res, next){
    const { password } = req.query;
    console.log(password);

    if(password !== 'abcd1234'){
        return res.send('Invalid Password')
    }

    next();
}

app.get('/secret', checkPassword, (req, res) => {
    res.render('secret');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});