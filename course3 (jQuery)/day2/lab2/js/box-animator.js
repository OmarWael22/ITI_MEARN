
function loopAnimation(){
    $(".box").animate({
        width: "200px",
        height : "200px",
        backgroundColor : "blue",
        left: "500px" 
    },2000);
    $(".box").animate({
        width: "100px",
        height : "100px",
        backgroundColor : "green",
        left: "500px",
        top:"400px" 
    },2000);
    $(".box").animate({
        width: "200px",
        height : "200px",
        backgroundColor : "yellow",
        left: "0px",
        top:"400px" 
    },2000);
    $(".box").animate({
        width: "100px",
        height : "100px",
        backgroundColor : "red",
        left: "0px",
        top:"0px" 
    },2000,loopAnimation)
}
loopAnimation()
