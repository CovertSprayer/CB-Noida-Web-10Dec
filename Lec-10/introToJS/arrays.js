var numbers = [1, 2, 4, 5];

// console.log(numbers[4])
console.log(numbers)

numbers.push(7);
numbers.pop();

numbers.shift();
numbers.unshift(100)

numbers[3] = 300;

numbers.splice(2, 0, 200, 10000);

numbers[10] = 10;
console.log(numbers);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9, 8];
// ...
// var arr3 = arr1.concat(arr2, arr3);
// var arr3 = [...arr1, ...arr3, ...arr2];
console.log(arr3);

console.log(arr3.includes(6))
console.log(arr3.indexOf(8))

