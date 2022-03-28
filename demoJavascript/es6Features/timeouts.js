// setTimeout(()=>{
//     console.log("this is a timeout statement");
// },  2000)

// setInterval(()=>{
//     console.log("this is a timeout statement");
// },  2000)

console.log("start");                            
setTimeout(() => {
    console.log("in progress");
}, 2000);
setTimeout(() => {
    console.log("in progress 1");
}, 1000);
console.log("end");