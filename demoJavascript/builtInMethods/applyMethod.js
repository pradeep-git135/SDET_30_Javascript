var person1 = {
    fname : "C R",
    lname : "Pradeep",
    introduse : function () {
        console.log("hello all myself "+ this.fname+" "+this.lname);
    }
}
var person2 = {
    fname : "unknown",
    lname : "unknown",
    fullname : function () {
        console.log(this.fname + " " +this.lname);
    },
    func1 : function () {
        console.log("something");
    }
}

function greeting(greet1,greet2) {
    console.log(greet1+" "+this.fname + " " +this.lname+" "+greet2);
}

greeting.apply(person1,["hello Good morning", "welcome"])

person1.introduse.apply(person2)
