// var x = "helloo";

// console.log(window);
// console.log(window.location.host);
// console.log(window.screen.width);
// var p1 = document.getElementById("p1");
// p1.innerHTML = "<span>new content</span>";
// console.log(p1.innerHTML);
// var div1 = document.getElementById("div1");
// console.log(div1.innerHTML);
// div1.innerText = "new text from javascript";
// div1.innerText += "<p>new p</p>";
// div1.innerHTML += "<p>new p</p>";
// var pList = document.getElementsByTagName("p");
// console.log(pList);
// for (let index = 0; index < pList.length; index++) {
//   console.log(pList[index]);
//   var el = pList[index];
//   el.style.color = "red";
//   pList[0].style.backgroundColor = "green";
// }
// var classList = document.getElementsByClassName("one");
// console.log(classList);
// for (let i = 0; i < classList.length; i++) {
//   var cList = classList[i];
//   console.log(cList);
//   cList.classList.add("two");
//   classList[1].classList.toggle("two");
//   classList[1].classList.toggle("two");
//   classList[1].classList.remove("one");
// }
// var div1 = document.querySelector("#div1");
// div1.style.color = "red";
// console.log();
// var inputEl = document.querySelector("input[type=password]");
// console.log(inputEl.value);
// inputEl.setAttribute("type", "checkbox");
// var eleList = document.querySelectorAll("p");
// console.log(eleList);
// eleList.forEach(function (ele) {
//   ele.style.color = "green";
// });
// var p = document.createElement("p");
// p.innerText = "new next from js";
// p.style.backgroundColor = "red";
// p.setAttribute("id", "newp1");
// div1.appendChild(p);
// var img = document.querySelector("#img1");
// img.src = "img/download.png";
// document.body.style.backgroundColor = "gray";
function printData() {
  console.log("data");
}
// function getSelect() {
//   console.log(document.querySelector("#s1").value);
// }
// function div1() {
//   console.log("div1");
// }
// function div2() {
//   console.log("div2");
// }
// var btn = document.querySelector("#btn1");
// btn.addEventListener("click", function (e) {
//   console.log("user click", e);
// });
// document.querySelector("#txt1").addEventListener("input", function (e) {
//   console.log(e);
//   console.log(e.target.value);
// });
// btn.click = function () {
//   console.log();
// };
var inputdata = document.querySelector("#input1");
var btn = document.querySelector("#btnadd1");
var divView = document.querySelector("#viewDiv");
var arrData = [];
btn.addEventListener("click", function () {
  arrData.push(inputdata.value);
  console.log(arrData);
  viewAllData();
});
function viewAllData() {
  divView.innerHTML = "";
  arrData.forEach(function (user, i) {
    var p = document.createElement("p");
    p.innerText = user;
    p.classList.add("one");
    p.innerHTML +=
      '<input type="button"  value="delete" onclick="deletedata(' + i + ')">';
    divView.appendChild(p);
  });
}
function deletedata(id) {
  arrData.splice(id, 1);
  viewAllData();
}
