
// var pro = new Promise( (resolve, reject)=>{
//     let x = "ty";
//     let y = "tys";
//     if (x == y) {
//         resolve("x and y are equal")
//     }else{
//         reject("x and y are not equal")
//     }
// } )

// pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


// console.log("start");                            
// setTimeout(() => {
//     console.log("in progress");
// }, 2000);
// console.log("end");


// async function sync() {
//     console.log("start"); 
//     var p = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//            resolve("in progress")
//         }, 2000);
//     })            
//    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})  
//     console.log("end");          
// }
// sync()


function fun1() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("promise1 resolved")
        }, 3000);
    })
}
// fun1().then((data)=>{data* 3})

function fun2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("promise2 resolved")
        }, 2000);
    })
}

function fun3() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("promise3 resolved")
        }, 1000);
    })
}

//promise chaining   //callback hell

// fun1().then(function (msg){
//     console.log(msg);
// return fun2()}).catch().then((msg)=>{console.log(msg);
// return fun3()}).catch().then((msg)=>{console.log(msg);}).catch()


// Promise.all([fun1(), fun2(), fun3()]).then((msg)=>{console.log(msg);console.log("all the promise got resolved");}).catch()

//promise racing

// Promise.race([fun1(), fun2(), fun3()]).then((msg)=>{console.log(msg);}).catch()