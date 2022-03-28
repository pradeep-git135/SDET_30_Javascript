// console.log(a);   //undefined
// var a 
// a = 100;
// var a =200
// console.log(a);   //200

// console.log(x);    //ReferenceError: Cannot access 'x' before initialization
// let x 
// x = 20
// let x = 35    //SyntaxError: Identifier 'x' has already been declared
// console.log(x);    //20

// const y = 3.1415;

// function fun1() {
//     console.log("local");
// }
// y = 3;
// console.log(y);    //TypeError: Assignment to constant variable.

// {
//     var b = "Pradeep"
//     let w = "welcome"
// }

// fun1()
// console.log(index);                 //undefined
// for (var index = 0; index < 5; index++) {
//     console.log(index);
// }                                                   // 0 1 2 3 4
// console.log(index);    //4   error   0  can't access undefined

// console.log(index);       //ReferenceError: index is not defined
// for (let index = 0; index < 5; index++) {
//     console.log(index);                     //0 1, 2, 3, 4
// }
// console.log(index); //ReferenceError: index is not defined          //5  reference_error undefined

// var a = 100;
// console.log(a);   //100
// {
//     var a = 200
//     console.log(a);  //200
// }
// console.log(a);   //200


// let x = 10
// {
//     let x = 20
// }
// console.log(x);   //10 

// var a = 20
// let a = 30
// console.log(a);  //SyntaxError: Identifier 'a' has already been declared