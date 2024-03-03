const api = 'https://dummyjson.com/products';
const list = document.querySelector('.list');

async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
}

function render(data){
    list.innerHTML = '';
    appendData(data);
}

function appendData(data){
    for (let product of data) {
        const item = createItem(product)
        list.append(item);
    }
}

function createItem(product) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = '18rem';

    const str = `
            <img src="${product.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h5 class="card-title">$ ${product.price}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        `
    div.innerHTML = str;
    return div;
}

getData()
    .then(data => render(data));

const searchBox = document.querySelector('input');

searchBox.addEventListener('keydown', async (e)=>{
    const query = searchBox.value;
    console.log(query)

    const data = await getData();
    const filteredData = [];

    if(query != ''){
        for(let product of data){
            if(product.category.includes(query) )
                filteredData.push(product);
        }
    }
    else{
        filteredData = data;
    }
    console.log(filteredData);
    render(filteredData)
})
