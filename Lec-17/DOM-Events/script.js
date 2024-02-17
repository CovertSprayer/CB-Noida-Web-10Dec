const rectangle = document.querySelector('div');
console.log(rectangle)

// rectangle.onclick = function(){
//     console.log('clicked')
// }

// rectangle.onclick = function(){
//     console.log('clicked again')
// }

rectangle.addEventListener('click', function(){
    console.log('a');
    // rectangle.style.backgroundColor = 'teal';
    rectangle.classList.toggle('teal-col');
})

// rectangle.addEventListener('click', function(){
//     console.log('b');
// })

rectangle.addEventListener('dblclick', ()=>{
    console.log('Double Clicked!')
})

rectangle.addEventListener('mouseenter', ()=>{
    rectangle.children[0].style.color = 'red';
    // console.log('testing')
})

rectangle.addEventListener('mouseleave', ()=>{
    rectangle.children[0].style.color = '';
    // console.log('testing')
})

document.addEventListener('scroll', ()=>{
    console.log('scrolled')
})

// document.addEventListener('mousemove', ()=>{
//     alert('Warning!!')
// })

document.addEventListener('copy', ()=>{
    alert('Dont Copy!!')
})