const express = require('express');
const app = express();
const path = require('path');

const users = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded());
//body parser

app.get('/', (req, res) => {
    // res.send('Working Fine!!')
    res.render('home')
})

app.get('/users/new', (req, res) => {
    const { username, password } = req.query;
    console.log(req.query);
    console.log("form data------->", req.body);

    if(!username || !password){
        return res.send('Invalid Data');
    }

    users.push({ username, password });
    res.send('User Created Successfully!');
})

app.post('/users/new', (req, res)=>{
    console.log(req.body);
    // const username = req.body.username;
    // const password = req.body.password;

    res.send('Hello from users/new route')
})

app.get('/download/:fileName', (req, res)=>{
    let {fileName} = req.params;
    fileName += '.txt';

    const filePath = path.join(__dirname, 'staticFiles', fileName);
    console.log(filePath);

    res.download(filePath);
})

app.get('/users', (req, res)=>{
    res.json({
        users
    })
})

app.listen(4444, () => {
    console.log('Server is up at port', 4444);
})