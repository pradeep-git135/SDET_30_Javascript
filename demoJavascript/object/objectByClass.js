class mobile {
    constructor(brand, model, ram, rom, price){
        this.brand = brand
        this.model = model
        this.ram = ram
        this.rom = rom 
        this.price = price
    }
}
var m1 = new mobile("redme", "note10", 8, 125, 19000)
mobile.cam = "16mp"
console.log(m1);
m1.color = "white"
m1.screensizw = 5.5
console.log(m1);
console.log("==================="+mobile.cam);
console.log("==================="+mobile.color);