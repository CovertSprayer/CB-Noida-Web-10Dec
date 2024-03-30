const funFromAdd = require('./file1');
const multiply = require('./file2');
const math = require('./math');
const {cat, dog} = require('../requireDirectory');

cat();
dog();


console.log(math.add(20,50));
console.log(math.multiply(20,50));
console.log(math.divide(20,50));


/*
funFromAdd = {
    "add": add
}



const a = 20;
const b = 30;

console.log(funFromAdd.add(a,b));
console.log(multiply(a,b));
*/