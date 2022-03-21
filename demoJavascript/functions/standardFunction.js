// function demo(msg) {
//     console.log("the parameter received : "+msg);
//     console.log(arguments);
//     console.log(arguments[2]);
// }
// // demo("info")
// // demo(7)
// demo(true)
// demo("param2", 2, true, undefined, null)

function fun1(msg) {
    return msg
}
console.log(fun1("data"));

var returnValue = fun1("confidential data")
console.log(returnValue);