// var person1 = {
//     fname : "C R",
//     lname : "Pradeep",
//     introduse : function () {
//         console.log("hello all myself "+ this.fname+" "+this.lname);
//     }
// }
// var person2 = {
//     fname : "unknown",
//     lname : "unknown",
//     fullname : function () {
//         console.log(this.fname + " " +this.lname);
//     },
//     func1 : function () {
//         console.log("something");
//     }
// }

// function greeting(greet1,greet2) {
//     console.log(greet1+" "+this.fname + " " +this.lname+" "+greet2);
// }

// var returnedCopy = greeting.bind(person1,"hello goodmorning", "welcome")
// returnedCopy()

// var result = person2.fullname.bind(person1)
// result()


function sum(a,b) {
    return (a+b)
}

// console.log(sum(2,5));

var add2 = sum.bind(this, 2)                     //function currying
console.log("sum of the numbers "+add2(5));