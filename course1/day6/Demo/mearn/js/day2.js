var x = 5;
// for (var i = 0; i < x; i++) {
//   console.log(i);
// }
// var y = 15;
// for (var i = 0; i < y; i += 5) {
//   console.log(i);
// }
// for (var i = 15; i >= 0; i--) {
//   console.log(i);
// }
// var i = 0;
// while (i < y) {
//   console.log("hi", i);
//   i++;
// }

// do {
//   console.log("hi", i);
//   i++;
// } while (i < y);

// for (let index = 0; index < 10; index++) {
//   console.log(index);
//   if (index == 5) {
//     break;
//   }
// }
// for (let index = 0; index < 10; index++) {
//   if (index == 5) {
//     continue;
//   }
//   console.log(index);
// }
// var x = 5;
// var y = 6;
// function fun() {
//   console.log("sum=", parseInt(5) + parseInt(6));
// }
// fun();
// calc(30, 20);
// function calc(x=0, y) {
//   console.log(x + y);
// }
// // calc(20, 10);
// // calc(5, 6);

// function calc(x) {
//   console.log(x);
// }
// calc(5);
// calc(20, 30);

// function fun1(x) {
//   return x.toUpperCase();
//   //fdhdkjfhkdjhfkdsjfhkjds;
// }
// var r = fun1("hi my name is admin");
// console.log(r);
// var fun = function () {
//   console.log("hi from js");
// };
// fun()
// var fun2 = (x) => console.log(x);
// fun2(20);

// function fun1(x) {
//   function fun2(y) {
//     console.log("fun2", x + y);
//     var fun3 = function () {
//       console.log("fun3", x + y + 5);
//     };
//     fun3();
//   }
//   fun2(5);
//   console.log("fun1", x);
// }
// // debugger;
// fun1(2);
// // fun2(30);
// (function (x) {
//   console.log("hi ", x);
// })(30)
// console.log("test");
// var fun = Function("x", "y", "console.log(x+y)");
// fun(20, 10);
// (function (c) {
//   console.log(c);
// })(3);
// function viewData(funName, x) {
//   //funname=printConsole, x"f.nflkfjlkf"
//   for (var i = 0; i < x.length; i++) {
//     funName(x[i].toUpperCase());
//   }
//   //funName(x); //printConsole(x)
// }
// function printConsole(txt) {
//   console.log(txt);
// }
// viewData(printConsole, "this is a new text");
// function printDoc(data) {
//   document.write(data);
// }
// viewData(printDoc, "hi mty name is admin");

// viewData(function (x) {
//   console.log(x);
// }, "any data");
//console.log(hh);

// try {
//   //   console.log(hh);
// } catch (e) {
//   console.error("error in code", e);
// } finally {
//   console.log("final code");
// }
// console.log("test data");

function closureTest() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
var cFn = closureTest();
cFn[0]();
cFn[1]();
cFn[2]();

function closureTest() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}
var cFn = closureTest();
cFn[0]();
cFn[1]();
cFn[2]();
