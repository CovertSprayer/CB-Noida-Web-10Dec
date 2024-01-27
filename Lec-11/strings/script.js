// toUpperCase()
// toLowerCase()
// concat() -> +
// trim(), trimStart(), trimEnd()
// replace(), replaceAll()
// slice(), subString()

var str1 = '        Hello World!!';
var str2 = 'Hello World!!         ';
var str3 = '          Hello World!!         ';

// console.log(str1.trimStart());
// console.log(str2.trimEnd() + 'abcde');
console.log(str3.trim());

console.log(str3.trim().replace('o', '0'))
console.log(str3.trim().replace('Hello', 'Hey'))
// console.log(str3.replaceAll('!', '?'))

var str = 'This is some string';

console.log(str.slice(8, 12))
console.log(str.substring(8, 12))
console.log(str.slice(-6, -1));

var newStr = 'string';
console.log(newStr.slice(-6));
console.log(newStr.substring(-6, -3)) 

var word = `hello 
world`

console.log(word)