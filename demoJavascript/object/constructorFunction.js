function Car(brand, model, spec) {
    this.brand = brand
    this.model = model
    this.spec = spec
}
Car.prototype.seatCapacity = 5

var c1 = new Car("TOYOTA", "Fortuner", [2,3,4])
// c1.seatCapasity = 5
var c2  = new Car("SUZUKI", "Grand vitara", [9,8,7])
console.log(c2.seatCapacity);
// console.log(c1.spec);