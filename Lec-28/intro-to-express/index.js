const express = require('express')
const app = express()
const port = 3000
const data = require('./data');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send('LOGIN Page!!')
})


// app.get('/products/1', (req, res)=> {
//     const product = data.filter(product => product.id === 1);
//     res.send({
//         product
//     })
// })

// app.get('/products/2', (req, res)=> {
//     const product = data.filter(product => product.id === 2);
//     res.send({
//         product
//     })
// })

// app.get('/products/3', (req, res)=> {
//     const product = data.filter(product => product.id === 3);
//     res.send({
//         product
//     })
// })

// /:id -> to make it variable
app.get('/products/:id/:abcd', (req, res)=> {
    console.log(req.params);
    const id = req.params.id;
    // const {id} = req.params;

    const product = data.filter(product => product.id == id);
    res.send({
        product
    })
})

app.get('/products', (req, res)=> {
    console.log(req.query);
    const id = req.query.id;
    // const {id} = req.params;

    const product = data.filter(product => product.id == id);
    res.send({
        product
    })
})


app.get('/products', (req, res)=>{
    res.send({
        products:data
    })
})



app.get('/register', (req, res)=>{
    res.send('Register Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})