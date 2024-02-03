
// var a = 10; 

// function temp(){
//     console.log(b);
//     var b = 20;
// }

// console.log(a);
// temp();

console.log(a);

function temp(){
    cat();
    var b = 20;
    function cat(){
        console.log(b);
        console.log('Meoww!')
    }
}
temp();
var a = 100;

// console.log(x) // -> cannot access before initialization (DTZ);
let x = 10;