const express = require('express');
const app = express();
const { createServer } = require('node:http');
const path = require('node:path');
const { Server } = require('socket.io');
app.use(express.static(path.join(__dirname, 'public')));

const server = createServer(app);
const io = new Server(server);

users = {}

io.on('connection', (socket) => {
    console.log('User connected!!!', socket.id);

    // socket.emit('testing', { name: 'abcd' });
    socket.on('set-username', (data)=>{
        console.log(data);
        users[socket.id] = data.username; 
        console.log(users);
    })

    socket.on('message', (data) => {
        io.emit('message', {
            ...data,
            username: users[data.socketId]
        })
    })
})


server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});