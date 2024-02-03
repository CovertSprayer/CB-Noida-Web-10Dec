
function outerFun(){
    var a = 10;
    function innerFun(){
        // var b = 20;
        function innerMost(){
            a = a + 1;
            // b = b + 1;
            console.log(a);
        }
        return innerMost;
    }
    return innerFun;
}

var fun = outerFun();
var fun1 = fun();
var fun2 = fun();

fun1();
fun1();
fun2();
fun2();