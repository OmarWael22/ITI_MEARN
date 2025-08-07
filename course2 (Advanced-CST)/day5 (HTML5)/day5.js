var mySvg = document.querySelector("#svg2");
var eyes = document.querySelectorAll("svg .eye")
var mouses = document.querySelectorAll("svg .mouse")

eyes.forEach(function(eye){
    eye.addEventListener("mouseenter",function(event){
        // console.log(event.target);
        eye.style.fill = "red"
})
    eye.addEventListener("mouseleave",function(event){
        event.target.style.fill = "black";
    })
});

mouses.forEach(function(mouse){
    mouse.addEventListener("mouseenter",function(event){
        mouses.forEach(function(m){
                    if(m.id == "path3898")
                        m.style.stroke = "red";
                    else
                        m.style.fill = "red"
        })
    mouse.addEventListener("mouseleave",function(event){
        mouses.forEach(function(m){
                    if(m.id == "path3898")
                        m.style.stroke = "black";
                    else
                        m.style.fill = "black"
                })
        })

    })
})

/*********************************** */
var myVedio = document.querySelector(".sec2 video")
var playBtn = document.querySelector("#play");
var stopBtn = document.querySelector("#stop");
var muteBtn = document.querySelector("#mute");
var unmuteBtn = document.querySelector("#unmute");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var vedProgress = document.querySelector(".sec2 .controls progress");
var volumeRange = document.querySelector(".sec2 .controls input[type='range']");


playBtn.addEventListener("click",function(){
    myVedio.play();
});
stopBtn.addEventListener("click",function(){
    myVedio.pause();
});
muteBtn.addEventListener("click",function(){
    myVedio.muted = true;
});
unmuteBtn.addEventListener("click",function(){
    myVedio.muted = false;
});

/* progres */
myVedio.addEventListener('loadedmetadata', () => {
    vedProgress.setAttribute("max", myVedio.duration);
    console.log(myVedio.duration);
});

var vedInterval = setInterval(function(){
    vedProgress.value = myVedio.currentTime;
});

volumeRange.addEventListener("input",function(){
    myVedio.volume = volumeRange.value;
    // console.log(volumeRange.value);
})
/* playlist */
var playList = ["media/ed_1024_512kb.mp4","media/sample.mp4","media/sample.webm","media/ed_hd.ogv"]
var currentVedio = 0;
prevBtn.addEventListener("click",function(){
    currentVedio--;
    if(currentVedio <0){
        currentVedio = playList.length -1 ;
    }
    myVedio.src = playList[currentVedio]
})
nextBtn.addEventListener("click",function(){
    currentVedio++;
    currentVedio %= playList.length
    myVedio.src = playList[currentVedio]
})
myVedio.addEventListener("ended",function(){
    nextBtn.click();
})

var vedSelect = document.querySelector("#video-select");
console.log(vedSelect);
vedSelect.addEventListener("change",function(){
    console.log(vedSelect.value);
    myVedio.src = playList[vedSelect.value];
    currentVedio = parseInt(vedSelect.value)
    
})
/*********************************************** */
var locationBtn = document.querySelector("#geolocation");

locationBtn.addEventListener("click",function(){
    console.log("clicked");
    navigator.geolocation.getCurrentPosition(function(p){
        console.log(p.coords);
        var lat  = p.coords.latitude;
        var long = p.coords.longitude;
        var mapUrl = "https://maps.google.com/?q="+lat+","+long;
        window.open(mapUrl)
    },
    function(err){
        console.error("Error: " + err.message);
    });
});
