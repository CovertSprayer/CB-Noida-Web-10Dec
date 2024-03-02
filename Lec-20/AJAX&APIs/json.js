const product = {
    title: 'Laptop',
    price: '25000',
    desc: 'HP, 256GB SSD, 1TB HDD',
    images: ['https://i0.wp.com/itportal.co.in/wp-content/uploads/2022/11/1-170.jpg?fit=1500%2C1127&ssl=1'],
    rating: 4.4,
    fun: function(){
        console.log('Hello from product');
    }
}

product.fun();

console.log(product)

const data = JSON.stringify(product);
console.log(data);

console.log(JSON.parse(data));
