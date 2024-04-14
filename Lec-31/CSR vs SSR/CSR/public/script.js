console.log('connected');
const list = document.querySelector('.todo-list');

async function render(){
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json();
    console.log(data);
    createList(data.todos);
}

function createList(todos){
    for(let todo of todos){
        const li = document.createElement('li');
        li.innerText = todo;
        list.append(li);
    }
}


render();