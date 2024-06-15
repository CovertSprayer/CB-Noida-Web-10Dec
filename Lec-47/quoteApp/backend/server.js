const express = require('express');
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/quote-db')
    .then(()=> console.log('quote-db connected'))
    .catch(err => console.log(err));

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/api/v1/', routes);

app.get('/', (req, res)=>{
    res.send('Wroking Fine!!')
})

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({
        message: 'Internal Server Error'
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server is up at port', PORT);
})