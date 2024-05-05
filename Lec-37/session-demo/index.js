const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'somesecret',
    resave: false,
}))

app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

app.get('/set-session', (req, res)=>{
    req.session.name = 'Prakhar';
    res.send('Session set successfully!')
})

app.get('/get-session', (req, res)=>{
    res.send(req.session);
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});