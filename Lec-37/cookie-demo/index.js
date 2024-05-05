const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('some-password'));

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send('Working Fine!');
})

app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'Shreyance')
    res.cookie('name', 'Shreyance', { signed: true })
    res.send('Cookie set successfully!')
})

app.get('/get-cookies', (req, res) => {
    // req.cookies.name === 'Shreyance'
    // res.send(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});