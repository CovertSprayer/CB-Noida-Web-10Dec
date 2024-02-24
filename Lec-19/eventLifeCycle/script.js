const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', ()=>{
    console.log('Child Div Clicked!');
}, true)

parent.addEventListener('click', ()=>{
    console.log('parent Div Clicked!');
}, false)

grandParent.addEventListener('click', ()=>{
    console.log('grandParent Div Clicked!');
}, true)