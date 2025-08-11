/* task 1 */
$(".container1").append($("<div>new Div</div>").addClass("black"));
$(".container1").prepend($("<div>new Div</div>").addClass("white"))
$(".container1 .pink").before("<p class=yellow></p>")

/* task 2 */
$(".container2 p").each(function(idx,ele){
    jElement = $(ele);
    href = "https://" + jElement.text();
    jElement.parent().append($('<a></a>').text(jElement.text()).attr("href",href))
    jElement.remove()
})

/* task 3 */
$(".container3 img").before($("<figure></figure>"));
$(".container3 figure").append($(".container3 img")).append($("<figcaption></figcaption>").text("Coffee"));

/* task 4 */
$(".container4 .col-age").empty();
$(".container4 .col-name").each(function(idx,ele){
    if($(ele).text() == "Mohsen")
        $(ele).addClass("Man")
})
$(".container4 td").toggleClass("your-email")

/* task 5 */
var firstListLen = $(".container5 li[class^=task]").length ;
$(".container5 li").each(function(idx,ele){
    idx %= firstListLen;
    if( (idx+1)%3 ==0 ){
        $(ele).css("background-color","gray")
    }
})

/* task 6 */
$(".container5 input[name=username]").attr("value","<yourname>");
$("#my-form input[type=checkbox]").prop("checked",true);

/*************************************************/
