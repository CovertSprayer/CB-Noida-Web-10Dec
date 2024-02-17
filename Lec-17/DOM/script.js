
const h1 = document.getElementsByTagName('h1');
console.log(h1);

const heading = h1[0];
// console.log(heading)
// heading.style.color = 'green'
// heading.style.border = '2px solid green'

// const h2 = document.getElementsByTagName('h2');
// console.log(h2);

// const photo = document.getElementById('photo');
// photo.style.border = '12px solid grey'
// photo.style.height = '200px'
// console.log(photo);

// const fav = document.getElementsByClassName('fav');
// console.log(fav)

// fav[1].style.color = 'yellow';

// const username = document.getElementsByName('username');
// console.log(username);

// const movieList = document.querySelector('ol');
// const list = document.querySelectorAll('ul .fav');



// console.log(movieList);
// console.log(list)

heading.innerText = '<em>Something</em>';
// heading.innerHTML = '<em>Something</em>';


heading.setAttribute('id', 'heading');
// console.log(heading.getAttribute('id'))
const imgLink = document.querySelector('img').getAttribute('src');
document.querySelector('img').setAttribute('src', 'https://media.istockphoto.com/id/1763482093/photo/this-bridge-connects-two-areas-of-tea-fields-in-manalar-estate-theni-dist-in-india.webp?b=1&s=170667a&w=0&k=20&c=q4yyDn4pAvkstB1nWMiLtLvhPUluUQTFx01JG0W8eq0=')

const para = document.querySelector('p');
para.classList.add('random', 'one', 'two');
para.classList.remove('random');

para.classList.toggle('two');
console.log(para.classList.contains('one'));

// console.log(para.parentElement)
// console.log(para.nextElementSibling.nextElementSibling.children)
// console.log(para.previousElementSibling)


const ul = document.querySelector('ul');

