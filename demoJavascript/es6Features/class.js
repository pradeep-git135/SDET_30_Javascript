class Person {
    constructor(fname, lname, address, email){
        this.fname = fname
        this.lname = lname
        this.address = address
        this.email = email
    }
    // var let const     not allowed
    a = 10;
    static b = 30;

    // function   keyword is not allowed
    display(){
        console.log(this.a);
    }
    static sample(obj_ref){
        // console.log(this.a);
        console.log(this.b);
        // obj_ref.display()
    }

    static sample2(){
        this.sample()
    }

    display2(){
        Person.sample()
    }
}
let p1 = new Person("C R", "Pradeep", "India", "pradeepcr135@gmail.com")
let p2 = new Person("michel", "jhon", "us", "pradeepcr7@gmail.com")

// console.log(p1.fname);
// console.log(p1.a);
// console.log(p1.b); //undefined

// console.log(Person.b);

// p1.display()
// p1.sample()   //TypeError: p1.sample is not a function

// Person.sample2()

// p1.display2()

// Person.sample(p1);


class B extends Person {

    displayParentMethod(){
        // this.display()
        // console.log(super.a);
        // console.log(this.a);
        super.display()
    }
    displayParentMethod(c){
        console.log(c);
    }


}
let inst_b = new B();
// inst_b.display2()
// inst_b.displayParentMethod(100)

// module.exports = B

module.exports = inst_b