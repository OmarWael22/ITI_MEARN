// var obj = { fname: "admin", age: 50 };
// obj.lname = "ali";
// delete obj.lname;
// obj.move = function () {
//     console.log(this.fname + "is moving");
// }
// obj.move();
// console.log(obj);
// /* object is reference data type */
// obj2 = obj;
// console.log(obj2 == obj);
// obj2.fname = "obj2";
// console.log(obj);
// var obj3 = {};
// /* assign method return the target object */
// var obj4 = Object.assign(obj3, obj);
// obj4.fname = "obj4";
// console.log(obj3, "obj3");
// for (var key in obj) {
//     obj[key] = "ef";
// }
// var myArr = [1, 2, 3, 4, 5];
// var arr1 = myArr.filter(function (item) {
//     return item > 2;
// });
// console.log(arr1);
// // a -> first element , b -> second element
// arr1.sort((a, b) => b - a);
// console.log(arr1);
// arr1.concat([1]);
// arr1.forEach(function (item) {9
//     console.log(item);
// });

/* DOM */
var p1 = document.getElementById("myid");
console.log(p1);