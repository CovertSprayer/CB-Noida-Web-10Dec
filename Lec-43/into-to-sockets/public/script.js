const socket = io();

socket.on('message', (data) => {
    console.log(data);
    addToChat(data);
})

const inp = document.querySelector('.input-group input');
const sendBtn = document.querySelector('.input-group button');

sendBtn.addEventListener('click', (e) => {
    if (inp.value.length == 0) return;

    const textMsg = inp.value;
    sendMessage(textMsg);
    inp.value = '';

    // appendtoChat();
})

function sendMessage(textMsg) {
    socket.emit('message', {
        textMsg: textMsg,
        socketId: socket.id
    })
}

function addToChat(data) {
    const chat = document.querySelector('.chat-container');
    const div = document.createElement('div');
    div.classList.add('text-msg', 'p-3', 'my-2');
    if (data.socketId == socket.id) {
        div.classList.add('receiver');
    }
    else {
        div.classList.add('sender');
    }
    div.innerHTML = `${data.username} - ${data.textMsg}`
    chat.append(div);
}

function setUsername() {
    const inp = document.querySelector('#username-wrapper input');

    const username = inp.value;
    if (username.length == 0) return;

    socket.emit('set-username', { username });
    openChat();
}

document
    .querySelector('#username-wrapper button')
    .addEventListener('click', setUsername);


function openChat(){
    document.querySelector('#username-wrapper').style.display = 'none';
    document.querySelector('#chat-wrapper').classList.remove('d-none');
}