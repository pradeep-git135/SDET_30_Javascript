console.log(this);   //window

console.log("==============inside function================");
function sample(params) {
    console.log(this);   //window
}
sample()
console.log("==============inside object================");

var person = {
    fname : "C R",
    lname : "pradeep",
    intoduse : function () {
        console.log(this);        //person object
        var self = this
        function greet() {
            console.log(self);     //window
        }
        greet()
    }
}
person.intoduse()