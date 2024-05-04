const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.send('Working Fine!');
})

app.get('/set-cookie', (req, res)=>{
    res.cookie('name', 'Shreyance')
    res.send('Cookie set successfully!')
})

app.get('/get-cookies', (req, res)=>{
    // req.cookies.name === 'Shreyance'
    res.send(req.cookies)
})



const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});