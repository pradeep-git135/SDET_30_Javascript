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

// person1.introduse()
// person2.fullname()

person1.introduse.call(person2)    //function barrowing
greeting.call(person1,"good morning", "wellcome")
greeting.call(person2,"good morning", "wellcome")