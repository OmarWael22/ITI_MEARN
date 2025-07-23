/* 1 */
var num = prompt("Enter a number");
if(num > 0 ){
    console.log("postive number");
}
else if(number<0){
    console.log("negative number")
}
else{
    console.log("zero")
}

/* 2 */
var response = confirm("Do you want to proceed");
response ? alert("You chose to proceed") : alert("Action canceled");

/* 3 */
var num = 10;
num % 2 === 0 ? console.log("hi") : console.log("heloo");

/* 4 */
do{
    var age = prompt("Enter your age");
    if (age != null){
        if( age <= 0 ) alert("Age must be a positive number")
        else if(age <=10) alert("You are Child")
        else if(age<=18) alert("You are teenager")
        else if(age<=50) alert("You are Grown Up")
        else alert("You are old")
    }
    
}while(  age != null)

/* 5 */
var time = prompt("Enter the time in 24 format");


if(time >=0 && time <12){
    if(time ==0){
        time=12;
    } 
    alert("Time is " + time + " AM")
}
else if (time <24){
    if(time !=12){
        time -=12;
    }
    alert("Time is " + time + " PM")
}
else{
    alert("time must be bwtween 0 and 24 not including 24 ")
}

/* 6 */

var str = prompt("Enter a string");
str = str[0].toUpperCase() + str.slice(1)
alert(str)

/* 7 */
var color = prompt("Enter Your favourite color");
var colorResponse = confirm("You chose color " + color);
colorResponse ? alert("Great chocie") : alert("let's try again");

/* 8 */
// convert both to time milleseond and the greater value means the older date

/* 9 */
var date1 = new Date("2022-03-05")
console.log(date1)
var date2 = new Date("2023-03-05")
console.log(date2)
var dateDiff = (date2 - date1 ) / (1000 * 60 * 60 * 24)
console.log(dateDiff)
/* 10 */
var mystr = "Hello World!";
var subStr = mystr.slice(mystr.indexOf('W'),mystr.indexOf('d')+1);
console.log(subStr);

/* 11 */
var x = 5.678 ;
x = x.toPrecision(3)
// x = x.toFixed(2)
console.log(x)

/* 12 */
var myNum = prompt("Enter a number");
if(myNum % 3 == 0 && myNum % 5 == 0)
    alert("True");
else
    alert("false");