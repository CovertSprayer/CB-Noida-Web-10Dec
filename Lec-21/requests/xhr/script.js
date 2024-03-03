const api = 'https://dummyjson.com/products';
const btn = document.querySelector('button');

const xhr = new XMLHttpRequest();

xhr.onerror = function(err){
    console.log(err);
}

xhr.onload = function(res){
    console.log(JSON.parse(res.currentTarget.response))
}

btn.addEventListener('click', ()=>{
    xhr.open('GET', api);
    xhr.send();
})
console.log(xhr)