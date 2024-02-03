let numbers = [10, -20, -30, 40, 50, -60];
let products = [
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "stock": 50
    },
    {
      "id": 2,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 499.99,
      "stock": 100
    },
    {
      "id": 3,
      "name": "Headphones",
      "category": "Electronics",
      "price": 79.99,
      "stock": 200
    },
    {
      "id": 4,
      "name": "Bookshelf",
      "category": "Furniture",
      "price": 149.99,
      "stock": 30
    },
    {
      "id": 5,
      "name": "Coffee Maker",
      "category": "Appliances",
      "price": 49.99,
      "stock": 80
    },
    {
      "id": 6,
      "name": "Dresser",
      "category": "Furniture",
      "price": 199.99,
      "stock": 20
    },
    {
      "id": 7,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 29.99,
      "stock": 150
    },
    {
      "id": 8,
      "name": "Microwave Oven",
      "category": "Appliances",
      "price": 89.99,
      "stock": 60
    },
    {
      "id": 9,
      "name": "Desk Chair",
      "category": "Furniture",
      "price": 79.99,
      "stock": 40
    },
    {
      "id": 10,
      "name": "Blender",
      "category": "Appliances",
      "price": 39.99,
      "stock": 100
    }
  ]

let newNumbers = numbers.map((num, ind, arr) => {
    // console.log(num, ind);
    // return `<li>${num}</li>`;
    if (ind % 2 == 0)
        return num * 2;
    else
        return num;
});

let filteredNums = numbers.filter((num, ind) => {
    // if(ind % 2 == 0){
    //     return true;
    // }
    // else {
    //     return false
    // };

    return ind % 2 == 0;
})

let filteredProducts = products.filter((product)=>{
    if(product.price < 500 && 
        product.category === "Electronics") 
        return true;
    else 
        return false;
})

let totalSumPrice = products.reduce((acc, item, ind)=>{
    return acc + item.price;
}, 0)

let total = numbers.reduce(function(acc, num, ind){
    return acc + num;
}, 0)

const sortedNumbers = numbers.sort((a,b)=>{
    // return b-a; // decreasing
    // return a-b; // increasing
})

const sortedProducts = products.sort((a,b)=>{
    return a.price - b.price;
})

// const name = 'Desk Chair';

const product = products.find((item)=>{
    return item.name === 'Desk Chair'
})

let item = numbers.find(num =>{
    return num === 10;
})

numbers.forEach((item, ind, arr)=>{
    console.log(item)
})

item = 10000;
console.log(numbers)

product.name = 'abcd';

console.log(product);
console.log(products);

// console.log(sortedProducts);
// console.log(total)
// console.log(sortedNumbers)
// console.log(totalSumPrice);

// console.log(newNumbers)
// console.log(filteredNums);
// console.log(filteredProducts);