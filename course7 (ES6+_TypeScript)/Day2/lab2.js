/* 1 */
myset = new Set(["omar","ahmed","ali"]);
myset.add("omar")
// console.log(myset);
let [x,y,z] = myset;
console.log(x,y,z);
for (const elem of myset) {
    console.log(elem);
}
/* 2 */
myMap = new Map();
myMap.set("omar",{ Grades:[
    {Coursename:"JavaScript", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"CSS", Grade:"V.Good"}]
});
myMap.set("said",{ Grades:[
    {Coursename:"JS", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"CSS", Grade:"bad"}]
});
myMap.set("mona",{ Grades:[
    {Coursename:"JavaScript", Grade:"v.godd"},
    {Coursename:"Jquery", Grade:"pass"},
    {Coursename:"CSS", Grade:"EX"}]
});

for (const [name,gradesObj] of myMap) {
    // student name
    console.log(name);
    console.log(gradesObj);
    
}
/* 3 */
let myArr =  [1,5,3,4,2,4,6,8,5] ;
console.log(myArr.filter(x => x%2 == 1));
myArr.forEach(x =>{
    if (x % 2 ==0)
        console.log(x);
})
console.log(myArr.find(x => x>5));
let newArr = myArr.map( x=> x*2);
console.log(newArr);
/* 4 */
let myTips = ["tip1","tip2","tip3","tipd","tip5","tip6","tip7","tip8","tip9"];
function* tipGenerator(Tips){
    for (const element of Tips) {
        yield element;
    }
}
let generator =  tipGenerator(myTips);

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let tipsDiv = document.querySelector("#tips");
function displayTip(){
    let currtip = generator.next().value
    if (currtip == undefined){
        generator = tipGenerator(myTips)
        currtip = generator.next().value
    }
    tipsDiv.innerHTML = currtip
}
btn1.addEventListener("click",displayTip)
btn2.addEventListener("click",function(){
    setInterval(displayTip,3000)
});
/* 5 */
(function sum(a,b){
    alert(a+b)
})(5,5);
/* 6 */
function reverseString(str){
    return Array.from(str).reverse().join("");
}
console.log(reverseString("hello"));
/* 7 */
function genCourseInfo( {courseName="ES6" , courseDuration="3days", courseOwner = "JavaScript", ...other }= {}){
    console.log(courseName);
    console.log(courseDuration);
    console.log(courseOwner);
    if(Object.keys(other).length != 0)
        throw new Error("Invalid Property")
}
genCourseInfo({grad:"f"})

/* 8 */
let  fruits = ["apple", "strawberry", "banana", "orange","mango"];
console.log(fruits.every( x => typeof x === "string"));
console.log(fruits.some( x => x.startsWith("a")));
let newArr2 = fruits.filter( x=> x.startsWith("b") | x.startsWith("s"))
newArr2.forEach(element => {
    console.log(element);
});