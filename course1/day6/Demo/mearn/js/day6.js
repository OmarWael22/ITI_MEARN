// setTimeout(function () {
//   console.log("hi");
// }, 5000);

// var id = setInterval(function () {
//   console.log(new Date());
// }, 3000);
// document.querySelector("#btnStop").addEventListener("click", function () {
//   clearInterval(id);
//   console.log("stop");
// });

// var imgArr = ["/img/800x800-1.svg", "/img/800x800-2.svg", "/img/800x800-3.svg"];
// var imgSlide = document.querySelector("#imgSlide");
// var idx = 0;
// var id = setInterval(function () {
//   imgSlide.src = imgArr[idx];
//   idx++;
//   if (idx >= 3) idx = 0;
// }, 3000);
// document.cookie = "user=admin;expires=Thu, 01 Jan 2026 00:00:00 GMT";
// document.cookie = "userid=admin123;expires=Thu, 01 Jan 2026 00:00:00 GMT";
// document.cookie = "id=1234;path=/day5.html;";
// console.log(document.cookie);
// localStorage.setItem("userName", "admin");
// var obj = [
//   { fname: "admin", age: 30 },
//   { fname: "user", age: 20 },
// ];
// var data = JSON.stringify(obj);
// console.log(data, obj);
// localStorage.setItem("userInfo", data);

// var oldData = localStorage.getItem("userInfo");
// console.log(JSON.parse(oldData));

// sessionStorage.setItem("userName", "admin");
var data;
var http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/users", false);
http.onreadystatechange = function () {
  if ((http.readyState == 4) & (http.status == 200)) {
    data = http.responseText;
    // console.log(JSON.parse(data));
  }
};
http.send();
// console.log("data", data);
var divUsers = document.querySelector("#divUsers");
var users = JSON.parse(data);
users.forEach(function (user) {
  var p = document.createElement("p");
  p.innerText = user.username + " - " + user.email;
  p.style.color = "red";
  p.style.backgroundColor = "yellow";
  divUsers.appendChild(p);
});
http.open("Post", "https://jsonplaceholder.typicode.com/users", true);
// http.setRequestHeader("Content-Type", "application/json");
http.onreadystatechange = function () {
  if ((http.readyState == 4) & (http.status == 201)) {
    console.log("data posted", http.responseText);
  }
};
http.send({ name: "admin" });
