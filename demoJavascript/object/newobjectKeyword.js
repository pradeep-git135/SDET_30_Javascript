var car  = new Object();
car.brand = "TOYOTA"
car.mode = "Land cruser"
car.color = "white"
car.spec = ["2.5l turbocharged engine", "250BHP", "500Nm"]
car.drive = function () {
    console.log("travel");
}
car.broucher ={
    brand : "TOYOTA",
    model : "Land cruser",
    color : "white",
    spec : ["2.5l turbocharged engine", "250BHP", "500Nm"],
    drive : function () {
    console.log("travel");
    }
} 

// console.log(car);
// console.log(car.broucher);

car.drive()