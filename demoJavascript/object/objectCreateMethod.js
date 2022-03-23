var person = {
    fname : "C R",
    lname : "Pradeep",
    skillset : ["javascript", "webdriverIO", "java", "selenium_webdriver", "api"],
    YOE : 4,
    introduce : function () {
        console.log("hello all myself "+ this.fname +" "+this.lname);
    },
    bioData : {fname : "C R",
    adress : "INDIA",
    lname : "Pradeep",
    skillset : ["javascript", "webdriverIO", "java", "selenium_webdriver", "api"],
    YOE : 4,
    introduce : function () {
        console.log("hello all myself "+ this.fname +" "+this.lname);
    }}
}

var person2 = {}
console.log(person2);

person2.__proto__ = person
person2.fname = "hedbvirb"
person2.lname = "dnbowb"
console.log("===========================after inheritence================");
console.log(person2.bioData);



// var person2 = Object.create(person)
// person2.fname = "xyz"
// person2.lname = "pqr"
// console.log(person);
// console.log("==================================================");
// console.log(person2);
// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// for (var property in person2) {
//     // if (person2.hasOwnProperty.call(person2, property)) {
//     //     const element = person2[property];
//     //     console.log(element);
        
//     // }
//     console.log(person2[property]);
// }


// var arr1 = new Array("a", "b", "c", 1, 2, 3)
// console.log(arr1);

// var a = new Number(3)
// console.log(a);

// var s = new String("pradeep")
// console.log(s);