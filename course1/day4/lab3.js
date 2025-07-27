/* 1 */
var password = "p@$$";
do {
    var passResponse = prompt("Enter the password");

} while (passResponse != password);

/* 2 */
var sum = 0
for(var i = 0 ; i<=100 ; i+=2){
    sum+=i;
}
console.log(sum);

/* 3 */
function calculator(num1 , num2 , operation){
    switch (operation){
        case "sum":
            return num1 + num2;
        case "multi":
           return num1 * num2 ;
        case "substract":
            return num1 - num2;
        case "division":
            return num1 / num2;
        default:
            return "Please enter valid operation"
    } 
}
var fNum = parseInt(prompt("Enter first number"));
var op = prompt("Enter operation");
var lNum = parseInt(prompt("Enter last number"));
alert(calculator(fNum,lNum,op));

/* 4 */
function loginCheck(user , pass){
    try {
        if(user != "admin"){
            throw new Error ("wrong username");
        }
        else if(pass != "421$$")
            throw new Error("wrong password")
        else{
            alert("login succesfully")
        }

    } catch (error) {
        console.log(error)
    }
}
var userName = prompt("Enter Username ");
var passWord = prompt("Enter password");
loginCheck(userName,passWord);

/* 5 */
function guessNumber(){
    var randNum = Math.floor(Math.random() * 10)
    while(true){
        userInput =  prompt("Guess a number from 0 to 9");
        if(userInput != randNum){
            alert("Wrong Guess Try Again");
        }
        else{
            alert("you Guessed right")
            break;
        }
    }
}
guessNumber();

/* 6 */
var userDate = prompt("Enter birth data in format DD-MM-YYYY");
if(userDate.length != 10 || userDate.charAt(2) != "-"  || userDate.charAt(5)!= "-"){
    alert("Wrong Date Format");
}
else{
    saveDate(userDate);
}
function saveDate(data){
    data_arr = data.split("-")
    var dateObj = new Date(data_arr[2],data_arr[1],data_arr[0]);
    alert(dateObj)
}

/* 7 */
function myGetDay(date){
    arr_day = ["sunday","monday","Tues","Wed","Thrus","Friday"]
    var dateObj = new Date(date);

    // to compare with the calculated day
    console.log(dateObj)
    
    return arr_day[dateObj.getDay()];
}
var userDate = prompt("enter date");
alert(myGetDay(userDate))


/* 8 */
var userString = prompt("Enter a String");
var userArr = userString.split('');
var vowelObj = {
    a:0,
    e:0,
    o:0,
    u:0,
    i:0
}
for(var i = 0; i < userArr.length; i++) {
    switch (userArr[i]) {
        case "a":
            vowelObj.a += 1;
            break;
        case "e":
            vowelObj.e += 1;
            break;
        case "o":
            vowelObj.o += 1;
            break;
        case "u":
            vowelObj.u += 1;
            break;
        case "i":
            vowelObj.i += 1;
            break;
        default:
            // do nothing
            break;
    }
}
console.log(vowelObj)