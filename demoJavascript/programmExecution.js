// console.log(window === this);

// console.log(x);   //ReferenceError: x is not defined

console.log(a);   //undefined
var a
a =100
console.log(a);    //100

sample()             
function sample() {
    var x = 20;
    console.log(x);
    console.log("i am a samole function");
}
// console.log(x);
sample()
// fun1()
var fun1 = function fun2() {
    console.log("this is function expression");
}
fun1()