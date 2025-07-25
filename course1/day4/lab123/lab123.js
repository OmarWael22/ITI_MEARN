/* lab 1 */
// single line comment
/*
multi line comment
*/
// displaying my name in console
console.log("Name : Omar Wael");
// displaying my age in console
console.log("Age : 23");
// displaying my favourite programming language in consol
console.log("Favourite programming language : JS");

/* lab 2 */
var firstName = "ali";
var lastName = "ahmed";
var age = 22;
var isStudent = true;
// camelCase
var firstName = "camelCase";
// snake_case
var first_name = "snake_case";
// PascalCase
var FirstName = "PascalCase";
// creating invalid variables
// try catch can't handle syntax error , it handles runtime errors
try {
    eval('var 123name = "invalid";')
    // var my-name = "invalid";
    // var let = "invalid";
} catch (error) {
    console.log(error);
}

/* lab 3 */
grade = prompt("Eneter your grade");
if (grade >= 90) {
    alert("Excellent");
} else if (grade >= 75) {
    alert("verygood");
} else if (grade >= 60) {
    alert("Pass");
} else {
    alert("fail");
}

/* lab 4 */
var randNum = (Math.random() * 90 + 10).toFixed(2);
console.log(randNum)

/* lab 5 */
var productName = prompt("Enter product name");
productName.toLowerCase();
console.log(productName.includes("lap"));

/* lab 6 */
var currDate = new Date()
currDate.setDate(currDate.getDate() + 3);
console.log(currDate);

/* lab 7 */
var nTries = 0
do {
    var password = prompt("enter your password");
    if (password == "123456") {
        alert("welcome");
        break;
    } else {
        alert("wrong password, try again");
    }
    nTries++;
    if (nTries >= 3) {
        alert("you have reached the maximum number of tries");
        break;
    }
} while (1)

/* lab 8 */
for (var i = 0; i <= 50; i++){
    if (i % 2 == 0) {
        continue;
    }
    if (i == 37) {
        break;
    }
    console.log(i);
}

/* lab 9 */
userNum = prompt("Enter a number");
for (var i = 1; i <= userNum; i++){
    var str = "*"
    console.log(str.repeat(i));
}

/* lab 10 */
var payment = parseInt(prompt("Enter your payment amount"));
payment += 50;
payment -= 120;
payment *= 1.15;
payment /= 1.5;
alert("Your final payment amount is: " + payment.toFixed(2));

/* lab 11 */
var userPass = prompt("Enter your password");
if (userPass.length < 8) {
    alert("Password is weak: must be at least 8 characters long");
} else if (/^\d+$/.test(userPass) || /^[a-zA-Z]+$/.test(userPass)) {
    alert("Password is weak: must contain both letters and numbers");
} else {
    alert("Password is strong ");
}

/* lab 12 */
for (var index = 0; index < 5; index++) {
    var code = "PROMO";
    for (var i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 10);
    }
    console.log(code);
}

/* lab 13 */
(function () {
    var confing = "IIFE"
    console.log(confing);
})();
// var confing is not accessible outside the IIFE
// console.log(confing);

/* lab 14 */
var num1 = parseInt(prompt("Enter first number"));
var op= prompt("Enter operator (+, -, *, /)");
var num2 = parseInt(prompt("Enter seconnd number"));
switch (op) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        try {
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            var result = num1 / num2
            console.log(result);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            console.log("operation completed");
        }
        break;
    default:
        console.log("Invalid operator");
}
