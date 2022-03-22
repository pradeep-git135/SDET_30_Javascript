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

//accessing the properties
//by using dot notation(.)
// console.log(person.YOE);

// person.introduce()

// console.log(person.lname);
//by using bracket notation([])

// console.log(person["skillset"]);

// console.log(person["bioData"]);

for (var property in person) {
    if (Object.hasOwnProperty.call(person, property)) {
        console.log(person[property]);
    }
}