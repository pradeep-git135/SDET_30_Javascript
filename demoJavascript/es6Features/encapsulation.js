class Encapsule{
    #data = "confidential_data"

    get readData(){
        return this.#data
    }
    set writeData(newData){
        this.#data = newData
    }
}
let inst_encapsule = new Encapsule()
// console.log(inst_encapsule.data);// undefined
console.log(inst_encapsule.readData)

inst_encapsule.writeData = "info"
console.log("==============after update=================");
console.log(inst_encapsule.readData)