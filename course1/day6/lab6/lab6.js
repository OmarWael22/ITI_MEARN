/* get data from the server */
var http = new XMLHttpRequest();
var data ;
http.open("GET","https://fakestoreapi.com/products", false);
http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
        data = http.responseText;
    }
}
http.send();
data= JSON.parse(data);
console.log(data);

var myImage = document.querySelector(".container img");
var myP = document.querySelector(".container p");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var stopBtn = document.querySelector("#stop");
var playBtn = document.querySelector("#play");
var normalBtn = document.querySelector("#normal");
var fastBtn = document.querySelector("#fast");
var superFastBtn = document.querySelector("#superfast");

var idx =  0
function changeImage(){
    myImage.src = data[idx].image;
    myP.innerText = data[idx].title;
    idx++;
    idx %= data.length;
}
/* default interval */
var currentInterval = 6000;
var id = setInterval(changeImage,6000)
/* add prev and next functionality */
prevBtn.addEventListener("click",function(){
    idx--;
    if(idx < 0) idx = data.length - 1;
    myImage.src = data[idx].image;
    myP.innerText =  data[idx].title;
});
nextBtn.addEventListener("click",function(){
    idx++;
    idx %= data.length;
    myImage.src = data[idx].image;
    myP.innerText =  data[idx].title;
});
/* add stop and play functionality */
stopBtn.addEventListener("click",function(){
    clearInterval(id);
    console.log("slide show stopped");
});
playBtn.addEventListener("click",function(){
    id = setInterval(changeImage, currentInterval);
});
/* add speed control functionality */
normalBtn.addEventListener("click",function(){
    clearInterval(id);
    currentInterval = 6000;
    id = setInterval(changeImage,6000);
});
fastBtn.addEventListener("click",function(){
    clearInterval(id);
    currentInterval = 4000;
    id = setInterval(changeImage,4000);
});
superFastBtn.addEventListener("click",function(){
    clearInterval(id);
    currentInterval = 2000;
    id = setInterval(changeImage,2000);
});

document.cookie = "user=admin;expires=Thu, 01 Jan 2026 00:00:00 GMT";
document.cookie = "userid=admin123;expires=Thu, 01 Jan 2026 00:00:00 GMT";

function setCookieValue(key,value,days){
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000))
    date.toUTCString();
    document.cookie = `${key}=${value};expires=${date}`;
};
setCookieValue("userName", "admin", 1);
console.log(document.cookie);

function getCookieArray(){
    var cookieArr = document.cookie.split(";")
    cookieArr.forEach((element , idx) => {
        element = element.trim();
        element = element.split("=");
        cookieArr[idx] = {
            key : element[0],
            value : element[1]
        };
    });
    return cookieArr;
}
function PrintCookies(){
    cookieArr = getCookieArray();
    cookieArr.forEach((ele,idx) => {
        console.log(`Cookie ${idx+1} : ${ele.key} = ${ele.value}`);
    })
}
PrintCookies();

function checkCookieValue(key){
    cookieArr = getCookieArray();
    filteredCookie = cookieArr.filter(ele => ele.key == key );
    if(cookieArr.length > 0){
        console.log(`Cookie ${key} = ${cookieArr[0].value}`);
    }
    else{
        console.log("Cookie not found");
    }
}
checkCookieValue("user")