// const inp = document.querySelector('input');

// inp.addEventListener('keydown', (e)=>{
//     console.log(e)
//     console.log('key pressed!!');
// })

// const link = document.querySelector('a');



// link.addEventListener('click', (e)=>{
//     console.log(e);
//     e.preventDefault();
// })


// inp.addEventListener('keyup', (e)=>{
//     console.log('key pressed!!');
// })

//alt + shift + f -> for indentation

const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const btn = document.querySelector('div.button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = inputs[0].value;
    const password = inputs[1].value;

    inputs[0].value = '';
    inputs[1].value = '';
    console.log(username, password);
})

btn.addEventListener('click', (e) => {
    // console.log(e.target);
    const username = inputs[0].value;
    const password = inputs[1].value;

    inputs[0].value = '';
    inputs[1].value = '';
    console.log(username, password);
})



