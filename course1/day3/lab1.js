// /* 1 */
// console.log("/** 1 **/");
// var name = "john";
// console.log(name);

// /* 2 */
// console.log("/** 2 **/");
// var x = 10;
// var y = 20 ;
// var sum = x + y;
// console.log(sum);

// /* 3 */
// console.log("/** 3 **/");
// var city;
// console.log(city);
// city = "cairo";
// console.log(city);

// /* 4 */
// alert("welcome to oue website!");

// /* 5 */
// console.log("/****** 5 ********/");
// var response = confirm("Are u sure you want to delete this item");
// console.log(response);

// /* 6 */
// console.log("/****** 6 *********/")
// fName = prompt("Enter Your first name");
// lName = prompt(fName + " enter Your last name");
// confirm("Your full name is " + fName + " " + lName);

// /* 7 */
// alert("It is the first release of the calc that support only summation");
// var x = prompt("Enter first number");
// var y = prompt("Enter last number");
// var result = parseInt(x) + parseInt(y) ;
// alert("The result of "+ x + " + " + y + " = " + result);

// /* 8 */
// console.log("/*** 8 ***/");
// var salary ;
// console.log(typeof salary);

/* 9 */
console.log("/*** 9 ***/")
var a = 50 ;
var b = 10;

a  = a.toString() + "," + b.toString();
b =  a.slice(0,a.indexOf(','));
a = a.slice(a.indexOf(',')+1)

console.log(a);
console.log(b);
