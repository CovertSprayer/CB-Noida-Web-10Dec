var numbers = ['one', 'two', 3, 4, 5, 6];
console.log(numbers)
console.log(typeof numbers)

//  --------------- normal loop -----------------

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])

// for(var i=0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

//  --------------- for of loop -----------------
for(var num of numbers){
    console.log(num);
}

//  --------------- for in loop -----------------

for(var x in numbers){
    console.log(numbers[x])
}


var data = ['abc', 'def', 'ghi'];
var reversedData = [];
for(let str of data){
    var newStr = str.split('').reverse().join('');
    reversedData.push(newStr);
}

console.log(reversedData)
