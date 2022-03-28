// let arr1 = [10, 20, 30, 40, 50]

// //  let x = arr1[2]
// //  let y = arr1[4]

// //  console.log(x, y);

//  //array destructuring 
//  let [x, y] = arr1
//  console.log(x, y);     //10 20

//  //skipping values in betwen
//  let [a,,,,b] = arr1
//  console.log(a, b);    //10 50

//  //rest parameter
//  let [p,q, ...r] = arr1
//  console.log(p, q, r);

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

// let firstName  = person.fname
// let skillset = person.skillset

// console.log(firstName, skillset);

//object destructuring
// let {fname, lname} = person

// console.log(fname, lname );

// let {YOE:experience, skillset:technologies} = person
// console.log(experience, technologies);