// function rest(a, b, ...c) {
//     console.log(a, b, c);
// }
// rest(100, 200, 300, 400, 500, 600)

let arr1 = ["a", "b", "c", 100, 200, 600]
function spread(x, y, z, p) {
    console.log(x, y, z, p)
}
spread(...arr1)