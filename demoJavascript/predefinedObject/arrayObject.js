var arr1 = [55,11,111,4,4444,2,3]
var arr2 = [10,20, 30, 40]
var strArray = ["a", "b","c"]

//properties :
// console.log(arr1.length );  //returns the length of an array  5
//methods of an array
// console.log(arr1.concat([100,200, 300, 400],arr2));
// console.log(arr1);

//push
// console.log(arr1.push(6,7));
// console.log(arr1);

//pop
// console.log(arr1.pop());
// console.log(arr1);


//shift
// console.log(arr1.shift());
// console.log(arr1);

//unshift
// console.log(arr1.unshift("a", "b", "c"));
// console.log(arr1);

//slice
// console.log(arr1.slice(undefined,10));

//splice
// console.log(arr1.splice(2,0,"a","b"));
// console.log(arr1.splice(2,2,"a","b"));
// console.log(arr1.splice(2,arr1.length,"a","b"));
// console.log(arr1);

// console.log(arr1.every( function (element) {
//     return element>3
// } ));

//some
// console.log(arr1.some( function (element) {
//     return element>3
// } ));

// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(40));

// console.log(arr1.lastIndexOf(3, 5));

// reverse
// console.log(arr1.reverse());
// console.log(arr1);

// includes
// console.log(arr1.includes(50));


//join
// console.log(strArray.join("*"));


//foreach is implimented by map method
// arr1.forEach((element, index)=>{
//     console.log(element+":"+index);
//     console.log(element*2);
// })



//map method is implimented by filter method
// console.log(arr1.map((element, index)=>{
//     return element*3
// }));
// console.log(arr1);


//filter
// console.log(arr1.filter((element, index, array)=>{
//     if (element >3) {
//         return element
//     }
// }));
// console.log(arr1);


//sort
// console.log(arr1.sort((a,b)=>{
//     return a-b
// }));


//reduce
// console.log(arr1.reduce((a,b)=>{
//     return a+b
// },2));


// reduceRight
// console.log(arr1.reduceRight((a,b)=>{
//     return a-b
// },2));

var amazon = [
                {productName : "iphone", productPrice : 10000},
                {productName : "ipod", productPrice : 5000},
                {productName : "mac", productPrice : 15000}
            ]
              //["iphone", ipod", "mac"]
              //[10000, 5000, 15000]

var citizen = [                                  //{India : 2 , USA : 1, EUROPE : 1, JAPAN: 1}
    {name : "abc", address : "INDIA"},
    {name : "def", address : "USA"},
    {name : "ghi", address : "EUROPE"},
    {name : "jkl", address : "JAPAN"},
    {name : "mno", address : "INDIA"}
]

console.log(citizen.reduce((countObj, item )=>{
    if (countObj[item.address]) {
        // countObj[item.address]++
        countObj[item.address] = countObj[item.address] + 1
    }
    else{
        countObj[item.address] = 1
        // countObj.item.address = 1
    }
    return countObj
},{}));

// var ref_obj = {};
// ref_obj.India = 1
// console.log(ref_obj);

// console.log(citizen.reduce((count, people)=>{
//         if (people.address == "INDIA") {
//             count = count + 1
//         }
//         return count
// },0));

// var IndiansArray = citizen.filter((people)=>{
//     return people.address == "INDIA"
// });

// IndiansArray.forEach((item)=>{
//     console.log(item.name);
// })


// console.log(amazon.reduce((price,item)=>{
//     price.push(item.productPrice)
//     return price
// },[]));

// var productName = [];
// for (const item of amazon) {
//     // console.log(item.productName);
//     productName.push(item.productName)
// }
// console.log(productName);

   //get the sum product price

//    var sum = 0;
//    for (const product of amazon) {
//        console.log(product);
//        console.log(product.productPrice);
//        sum = sum + product.productPrice
//    }
//    console.log(sum);

//using forEach method
// var sum = 0;
// amazon.forEach((product)=>{
//     sum = sum + product.productPrice
// })
// console.log("total sum of the product "+sum);



//for loop
// var sum = 0;
// for (let index = 0; index < amazon.length; index++) {
//     sum = sum + amazon[index].productPrice
//     console.log(sum);
// }
// console.log("total sum of the product "+sum);


// console.log(amazon.reduce((sum, product)=>{
//     sum = sum + product.productPrice
//     return sum
// }, 0)
// );

arr1.reduce