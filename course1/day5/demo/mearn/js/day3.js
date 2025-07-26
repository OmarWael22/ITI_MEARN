// var obj = { fName: "admin", age: 50 };
// obj.lname = "ali";
// delete obj.lname;
// obj.move = function () {
//   console.log(this.fName, " is moving");
// };
// obj.child = ["adam", "asser", "assel"];
// obj.move();
// obj.address = { city: "city1", street: "street1" };
// console.log(obj);

// console.log(obj.age);
// console.log(obj.child[1]);
// console.log(obj.address.city);
// var obj = { fName: "admin", age: 50 }; //0x4d5c2a2
// var obj2 = { fName: "admin", age: 50 }; //0x4f311a
// console.log(obj == obj2);
// var obj3 = obj;
// console.log(obj3 == obj);
// obj3.fName = "user";
// console.log(obj);
// var obj5 = {};
// Object.assign(obj5, obj);
// console.log(obj5);
// obj5.age = 30;
// console.log(obj, "obj");
// console.log(obj5, "obj5");

// var obj6 = Object.assign({}, obj);

// for (var k in obj) {
//   //   console.log(k);
//   console.log(k, "==>", obj[k]);
// }
var arr = [10, 20, 30, 40];
console.log(arr[1]);
console.log(arr.length);
arr.push(50);
arr.push(60, 70);
arr.pop();
arr.unshift(1);
arr.unshift(2, 3, 4);
arr.shift();
arr.splice(3, 2);
arr.splice(4, 1, 400, 500, 600, 700);
arr.splice(6, 0, 44, 55, 66, 77, 88);
console.log(arr);
var arr1 = arr.filter(function (v) {
  return v > 100;
});
console.log(arr1);
var strArr = ["admin", "user", "employee", "manager"];
var newSterArr = strArr.filter(function (s) {
  //return s.includes("e");
  return s.indexOf("s") >= 0;
});
console.log(newSterArr);
var arrObj = [
  { fName: "admin", age: 50 },
  { fName: "user", age: 20 },
  { fName: "employee", age: 30 },
  { fName: "Manager", age: 60 },
];
//return age > 25
var newArrObj = arrObj.filter(function (o) {
  return o.age > 25;
});
console.log(newArrObj);
var arr2 = arr;
arr2.push(800);
console.log(arr);
// arr.sort(function (a, b) {
//   return b - a;
// });
arr.reverse();
console.log(arr);
console.log(arr.slice(1, 5));
console.log(arr.indexOf(700));
console.log(arr.concat(101, 102, 103, 104));
console.log(arr.concat(arrObj));
var arr5 = arr.concat(arrObj);
arr5.push(555);
console.log(arr);
console.log(arr5);
arr5.forEach(function (item, index) {
  console.log(index, "==>", item);
});
