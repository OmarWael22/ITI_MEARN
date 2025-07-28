// alert("hi");
// console.log(5 + 5);
// console.log("test" + 5);
// console.error("jhkfjhkfj");
// var fullName = "mido";
// console.log(fullName);
// // var x;
// // console.log(x);
// // console.log(y);
// fullName = "hamada";
// console.log(fullName);

// x = 10;
// var x;
// console.log(x);
// var x = 5;
// var isAdmin = true;
// var obj = { name: "ahmed", age: 50 };
// var arr = [10, 20, 30, 40];

// var x = 20;
// var y = "10mm";
// console.log(x - y);

// var fname = prompt("enter your name");
// console.log(fname);
// var age = prompt(fname + " enter our age");
// console.log(fname, age);

// var del = confirm("delete data?");
// console.log(del);
// var num = 0xf1c3a9;
// console.log(num);
// var num2 = "20";
// var num3 = parseInt(num2);
// console.log(num3);
// console.log(typeof num3);
// var x = "y20px";
// var y = "30px";
// console.log(parseInt(x));
// console.log(parseInt(x) * parseInt(y));
// Number
// var num = 20;
// console.log(num.toString(), typeof num.toString());
// var num2 = 20.6458665;
// console.log(num2.toFixed(2));
// var num = 20.5654;
// console.log(Math.floor(num));
// console.log(Math.pow(5, 2));
// console.log(Math.ceil(num));
// console.log(Math.floor(Math.random() * 10));
// var isAdmin = [];
// console.log(isAdmin ? true : false);
// console.log(10 + isAdmin);
// var str = "      Lorem ipsum, dolor sit, amet consectetur, adipisicing     ";
// console.log(str[2]);
// // str[1]="hh"
// console.log(str.length);
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.charAt(1));
// console.log(str.slice(0, 10));
// console.log(str.split(","));
// console.log(str.startsWith("L"));
// console.log(str.endsWith("g"));
// console.log(str.includes("si"));
// console.log(str.concat(" admin is live"));
// console.log(str.repeat(5));
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
var myDate = new Date();
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getHours());
// console.log(myDate.getTime());
// var date2 = new Date("1/1/2020");
// console.log(myDate - date2);
// console.log(moment().format("dd/MM/yyyy"));
// var x = 5;
// var y = 6;
// console.log(x / y);
// console.log(x++);
// console.log(++x);
// var x = "hi my name is ahmed";
// x += " and my age is 50";
// console.log(x);
// var y = 5;
// y += 20;
// console.log(y);
// var x = "5";
// var y = 5;
// // console.log(x >= y);
// // console.log(x === y);
// // if (x != y) {
// //   console.log("x==y");
// // } else {
// //   console.log("x!=y");
// // }
// if (x > y) {
//   console.log("x!>y");
// } else if (x != y) {
//   console.log("x!=y");
// } else if (x < y) {
//   console.log("x>y");
// } else {
//   console.log("final");
// }
// x == y ? console.log("true") : console.log("false");
// x > y ? console.log("true") : y > x ? console.log("x>y") : console.log("end");
// var x = 6;
// var y = 5;
// var z = 10;

// if ((x > y || z < x) && x < z && z != x) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (x > y && y < z) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (x == y || x > y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

var role = prompt("enter role");
switch (role) {
  case "admin":
    console.log("welcome Admin");
    break;
  case "user":
    console.log("welcome user");
    break;
  case "employee":
    console.log("welcome Employee");
    break;
  default:
    console.log("error");
    break;
}
