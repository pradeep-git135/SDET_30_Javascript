//array 
// declaration :
    // var arr1 = new Array("value1", "pradeep", "tyss", 2, undefined, null,
    //                     ["java", "javascript", "selenium", "webdriverIo"],{fname : "pradeep", lname: "C R"})
    // console.log(arr1);
    // console.log(arr1.length);

    // var arr2 = new Array("pradeep")
    // console.log(arr2);
    // console.log(arr2.length);

    // var arr3 = new Array(5)
    // console.log(arr3);  //[5]
    // console.log(arr3.length);  //1


    // var arr4 = ["value1", "pradeep", "tyss", 2, undefined, null,
    //             ["java", "javascript", "selenium", "webdriverIo"],{fname : "C R", lname: "Pradeep"}]
    // console.log(arr4);
    // console.log(arr4.length);

    // for loop
    // for (let index = 0; index < arr4.length; index++) {
    //     console.log(index +" : "+arr4[index]);
    // }

    // while loop
    // var index = 0
    // while (index<arr4.length) {
    //     console.log(index +" : "+arr4[index]);
    //     index++
    // }

    //do while loop
    // var index = 0
    // do {
    //     console.log(index +" : "+arr4[index]);
    //     index++

    // } while (index<arr4.length);

    //for of loop

    // for (var  element of arr4) {
    //     console.log(element);
    // }

    //for in loop
    // for (var item in arr4) {
    //   console.log(item +" : "+arr4[item]);
    // }
var arr5 = [1, 2, , , 5, , 7]

arr5.forEach((value, index,arr)=>{
    console.log(index +" : "+value+" : "+arr);
    
})

// console.log("===============for loop+++++++++++++++++++++++");
//     for (let index = 0; index < arr5.length; index++) {
//         console.log(index +" : "+arr5[index]);
//     }
// console.log("++++++++++++++++++++++++++++++while loop+++++++++++++++++++++++++++++");
// // while loop
//     var i = 0
//     while (i<arr5.length) {
//         console.log(i +" : "+arr5[i]);
//         i++
//     }
//  console.log("++++++++++++++++++++++++++++++do_while loop+++++++++++++++++++++++++++++");
//     //do while loop
//     var j = 0
//     do {
//         console.log(j +" : "+arr5[j]);
//         j++;
//     } while (j<arr5.length);  
// console.log("++++++++++++++++++++++++++++++for of loop+++++++++++++++++++++++++++++");
//     //for of loop
//     for (var  element of arr5) {
//         console.log(element);
//     }
// console.log("++++++++++++++++++++++++++++++for in loop+++++++++++++++++++++++++++++");
// for (var element in arr5) {
//    console.log(element+" : "+arr5[element]);
// }

    