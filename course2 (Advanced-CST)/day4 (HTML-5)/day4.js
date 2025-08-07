var myform = document.querySelector(".assign3 form");
var red = myform.querySelector('#red')
var green = myform.elements["gree"]; 
var blue = myform.elements[2];
var myP = document.querySelector(".assign3 p");
myform.addEventListener("input",function(e){
    redVal = red.value;
    greenVal = green.value;
    blueVal = blue.value;
    console.log(redVal);
    myP.style.color = `rgb(${redVal},${greenVal},${blueVal})`
})
// var myform = document.querySelector(".assign3 form");
// var rgbColors = {
//     red :0,
//     green : 0,
//     blue : 0
// };
// var myP = document.querySelector(".assign3 p");
// myform.addEventListener("input",function(e){
//     targetID = e.target.id;
//     rgbColors[targetID] = e.target.value;
//     myP.style.color = `rgb(${rgbColors.red},${rgbColors.green},${rgbColors.blue})`
// })
const form = document.querySelector(".assign3 form");

// Measure document.querySelector
console.time("document.querySelector");
for (let i = 0; i < 100000; i++) {
    document.querySelector("#red");
}
console.timeEnd("document.querySelector");

// Measure form.querySelector
console.time("form.querySelector");
for (let i = 0; i < 100000; i++) {
    form.querySelector("#red");
}
console.timeEnd("form.querySelector");
console.log(document.querySelector('#red')); // should return the element
console.log(form.querySelector('#red'));     // must return same element
