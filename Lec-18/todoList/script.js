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
                            <input class="check" type="checkbox">
                            <p>${text}</p>
                        </div>
                        <div class="right">
                            <span class = "up-arrow">⬆️</span>
                            <span class = "trash-bin">🗑️</span>
                            <span class = "down-arrow">⬇️</span>
                        </div>`

    list.append(todo);
    // console.log(todo);
}

list.addEventListener('click', (e)=>{
    const element = e.target;
    if(element.classList.contains('check')){
        const para = element.nextElementSibling;
        // console.log(para);
        para.classList.toggle('completed');
    }

    if(element.classList.contains('trash-bin')){
        element.parentElement.parentElement.remove();
    }
})