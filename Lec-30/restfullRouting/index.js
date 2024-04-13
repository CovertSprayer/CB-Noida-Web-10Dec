const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

const users = [{
    id: uuid(),
    firstName: 'Abhishek',
    lastName: 'Srivastava',
    role: 'Frontend Developer',
    age: 26,
    email: 'abhishek@test.com',
    phone: '9990909090'
},
{
    id: uuid(),
    firstName: 'Abhishek',
    lastName: 'Srivastava',
    role: 'Frontend Developer',
    age: 26,
    email: 'abhishek@test.com',
    phone: '9990909090'
}];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users', (req, res) => {
    res.render('users/user', { users })
})

app.get('/users/new', (req, res) => {
    res.render('users/new')
})

app.post('/users', (req, res) => {
    // const { firstName, lastName, role, phone, age, email } = req.body;
    req.body.id = uuid();
    users.push(req.body);
    res.redirect('/users');
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    res.render('users/show', { user });
})

app.get('/users/:id/edit', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    res.render('users/update', { user });
})

app.put('/users/:id', (req, res)=>{
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.role = req.body.role;

    res.redirect('/users')
})

// app.get('/getalluser', (req, res)=>{
//     res.json({users});
// })


app.listen(4444, () => {
    console.log('Server is up at port 4444')
})