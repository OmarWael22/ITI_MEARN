var colors = ["red","blue","orange","green"]
$("div").hover(
    function(){
        // console.log("on");
        var currClass = this.className;
        // console.log(currClass);
        var idx = colors.indexOf(currClass);
        // console.log(idx);
        $(this).removeClass(currClass);
        $(this).addClass(colors[(idx+1)%4])
    },function(){
        // console.log("out");
        var currClass = this.className;
        var idx = colors.indexOf(currClass);
        if(idx == 0)
            idx = colors.length 
        console.log(idx);
        $(this).removeClass(currClass);
        $(this).addClass(colors[idx-1])

});
$("div").on("click",function(){
    $(this).after($(this).clone(true))
})