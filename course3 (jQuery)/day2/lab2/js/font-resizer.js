var myP = $("p.content");
var pError = $("p.error");
$("#increase").on("click",function(){
    var fontSize = myP.css("font-size");
    if(parseInt(fontSize) >= 50)
        pError.text("maximum font size reached!")
    else{
        pError.text("")
        myP.css("font-size","+=5px")
    }
})
$("#decrease").on("click",function(){
    var fontSize = myP.css("font-size");
    if(parseInt(fontSize) <= 12)
        pError.text("minimum font size reached!")
    else{
        pError.text("")
        myP.css("font-size","-=5px")
    }
})