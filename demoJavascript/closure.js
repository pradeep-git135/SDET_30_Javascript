var a = 100;
function sample() {
    console.log(a);
}
sample()
// function sample() {
//     console.log(a);
//     function inner() {
//        var  a = 200
//         console.log(a);
//         var x = "pradeep"
//     }
//     inner()
// }
// sample()

// console.log(x);


// function outer(value1) {
//     return function inner(value2) {
//         return (value1+value2)
//     }
// }

// var add5 = outer(5)
// console.log("output : "+add5(7));


// function outer(a) {
//     return function inner(b) {
//         return (a+b)
//     }
// }
// var add2 = outer(2)
// var result = add2(5)
// console.log(result);