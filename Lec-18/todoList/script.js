const form = document.querySelector('form');
const inp = document.querySelector('form input');
const list = document.querySelector('.list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = inp.value;
    inp.value = '';
    addTextToList(text);
})

function addTextToList(text){
    if(text == '') return;
    const todo = document.createElement('div');
    todo.classList.add('todo');

    todo.innerHTML = ` <div class="left">
                            <input type="checkbox">
                            <p>${text}</p>
                        </div>
                        <div class="right">
                            <span>⬆️</span>
                            <span>🗑️</span>
                            <span>⬇️</span>
                        </div>`

    list.append(todo);
    // console.log(todo);
}
