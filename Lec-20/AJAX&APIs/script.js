const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', async ()=>{
    // fetch('https://dummyjson.com/products')
    //     .then(response => {
    //         console.log(response)
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })

    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    console.log(data);

    data.products.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.title;
        container.append(li);
    });

})