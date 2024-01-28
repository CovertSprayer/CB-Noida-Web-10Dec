
// function calculate(fun, x, y){
//     console.log(fun(x,y));
// }   

// function add(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// calculate(add, 2, 5);
// calculate(multiply, 2, 5);

// -----------------------------------------------------

var data = [{l:5,b:6}, {l:8, b:3}, {l:2, b:10}, {l:4, b:4}];

// function area(l,b){
//     return a*b;
// }

// function perimeter(l,b){
//     return 2*(l+b);
// }

function calculate(data, logic){
    var output = [];
    for(var rect of data){
        var result = logic(rect.l, rect.b);
        output.push(result);
    }
    return output;
}

// HOF is a fun that can either accept one fun or return one fun
// eg -> calculate

var calculatedArea = calculate(data, (l,b)=>l*b);
var calculatedPerimeter = calculate(data, (a,b) => 2*(a+b));

// callback fun is a fun that is passed in argument of another fun
// eg -> (l,b)=>l*b, (a,b) => 2*(a+b)

console.log(calculatedArea)
console.log(calculatedPerimeter)

