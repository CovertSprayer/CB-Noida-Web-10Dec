const express = require('express');
const app = express();
const path = require('path');

const todos = ['Buy Something', 'Do so gaming', 'Watch Movies']

app.use(express.urlencoded());
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/todos', (req, res) => {
    res.json({
        todos
    })
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});