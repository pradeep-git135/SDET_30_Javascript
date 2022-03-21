

var sum = (function (a,b) {    //anonymous function
    // console.log(a+b);
    console.log(arguments);
    return (a+b)
 })(3,5,7,true, undefined, null)

 console.log(sum);

