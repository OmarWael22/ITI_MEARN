/* 1 */
var car = {
    brand: "BMW",
    model: "x6",
    year: 2020,
    info: function () {
        return this.brand + " " + this.model + " " + this.year;
    }
}
console.log(car.info());


/* 2 */
for (key in car) {
    console.log(key + ": " + car[key]);
}

/* 3 */
function objSwap(obj) {
    var swappedObj = {};
    for (key in obj) {
        swappedObj[obj[key]] = key
    }
    return swappedObj;
}
tempObj = {
    key1: "val1",
    key2: "val2",
    key3 : "val3"
}
var swappedObj = objSwap(tempObj);
console.log(tempObj);
console.log(swappedObj);

/* 4 */
var person = {
    name: "omar",
    addres : {
        country: "EG",
        government : "ALEX"
    },
    job: {
        title: "SW Engineer",
        company : "Google"
    }
}
function displayNestedObj(obj) {
    for (key in obj) {
        if (typeof obj[key] === "object") {
            console.log(key + ": ");
            displayNestedObj(obj[key]);
        } else {
            console.log(key + ": " + obj[key]);
        }
    }
}
displayNestedObj(person)

/* 5 */
function sortObj(arrObj, key) {
    // Bubble sort
    // for (var i = 0; i < arrObj.length; i++){
    //     for (var j = 0; j < arrObj.length - i - 1; j++){
    //         if (arrObj[j][key] > arrObj[j + 1][key]) {
    //             var tempObj = arrObj[j];
    //             arrObj[j] = arrObj[j + 1];
    //             arrObj[j + 1] = tempObj;
    //         }
    //     }
    // }
    arrObj.sort((a, b) => a[key] - b[key]);
}
arrObj = [{ age: 18, name: "omar" },
        { age: 10, name: "zizo" },
        { age: 5, name: "mizo" }];
sortObj(arrObj, "age");
console.log(arrObj);

/* 6 */
var arrNum = [2, 5, 1, 10, 170, -5];
arrNum.sort((a, b) => a - b);
console.log("min = ", arrNum[0]);
console.log("max = ",arrNum[arrNum.length-1]);

/* 7 */
var arrNum = [2, 5, 1, 10, 170, -5];
function reverseArray(arr) {
    var newArr = []
    arr.forEach(element => {
        newArr.unshift(element);
    });
    return newArr;
}
var revArr = reverseArray(arrNum);
console.log(revArr);

/* 8 */
arrObj = [{ price: 500, name: "omar" },
        { price: 400, name: "zizo" },
    { price: 200, name: "mizo" }];
function addProperty(arrObj, propertyName , initialValue) {
        arrObj.forEach(element => {
            element[propertyName] = initialValue;
        });
}
addProperty(arrObj,"discountedPrice",100)
console.log(arrObj);

/* 9 */
function getDayName(date) {
    days = ["sun", "mon", "tues", "wed", "thrus", "fri","sat"];
    return days[date.getDay()];
}
var mydate = new Date();
console.log(mydate);
console.log(getDayName(mydate));

/* 10 */
var arr1 = prompt("Enter array of numbers separated by ',' ").split(",");
var arr2 = prompt("Enter another array of numbers separated by ',' ").split(",");
function mergeArrays(arr1, arr2) {
    var newArr = arr1.slice();
    arr2.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}
console.log(mergeArrays(arr1,arr2));

/* 11 */
var arrObj = [];
while (1) {
    console.log(arrObj);
    var op = prompt("Enter Opeeration : (add || search || stop)");
    if (op == "add") {
        var userName = prompt("Enter Name");
        var phoneNumber = prompt("Enter PhoneNumber : ");
        applyOperation(op, userName, phoneNumber);
    }
    else if (op == "search") {
        var key = prompt("Enter Key to search for");
        applyOperation("search", key);
    }
    else {
        break;
    }
}
function applyOperation(op,...args) {
    switch (op) {
        case "add":
            var newObj = { name: args[0], phoneNumber: args[1] };
            arrObj.push(newObj);
            break;
        case "search":
            var foundFlag = 0
            arrObj.forEach(element => {
                for (key in element) {
                    if (element[key] == args[0]) {
                        printInfo(element);
                        foundFlag = 1;
                    }
                }
            });
            if (foundFlag == 0) {
                alert("Not Found!");
            }
            break;
    }
}
function printInfo(obj) {
    var txt = ""
    for (key in obj) {
        var str = key + ": " + obj[key] + "  " ;
        txt += str;
    }
    alert(txt);
}


