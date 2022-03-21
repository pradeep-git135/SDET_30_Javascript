
function normal(externalFunction) {
    externalFunction()
    console.log(" i am a normal function")

}

function callback() {
    console.log(" i am a callback function");
}
// normal(callback)

function ecommerce(status) {
    var result = status()
    if (result() == "paymentSuccessful") {
        console.log("product booked successfully");
    } else {
        console.log("insufficient balence");
    }   
}

//passing entire function as a parameter
ecommerce(function paymentStatus() {
    return function () {
        return "23r3paymentSuccessful"
    }
})

//passing function reference as a parameter
ecommerce(paymentStatus)