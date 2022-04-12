let importclass = require("./class")

console.log(importclass.a);


// class Extranal extends importclass{
//     demo(c){
//         this.displayParentMethod(c)
//     }
// }
// let inst_extranal  = new Extranal()
// inst_extranal.demo(200)               //ReferenceError: B is not defined


class Extranal {


    demo(){
        console.log(importclass.a);
    }

}
let inst_extranal = new Extranal()
// inst_extranal.demo()