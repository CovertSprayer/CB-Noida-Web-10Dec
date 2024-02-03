
function outerFun(){
    let a = 10;
    function innerFun(){
        a = a + 1;
        console.log(a);
    }

    return innerFun;
}

let fun1 = outerFun();
let fun2 = outerFun();

fun1(); //11
fun1(); //12
fun2(); //11
fun2(); //12