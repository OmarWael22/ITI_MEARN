/* task 1 */
$(".container1 div").each(function(idx,ele){
    $(ele).css("background-color",ele.className)
});
$(".container1 p").each(function(idx,ele){
    $(ele).css("color",ele.className)
});

/* task 2 */
$(".container2 a[href *=google]").text("Google")
$(".container2 a[href $=org]").text("IEEE")
$(".container2 a[href ^=https]").text("Facebook")
$(".container2 a[href ^=http]").append(" Official Website")

/* task 3 */
$($(".container3 img")[2]).attr("src","img/orange.png")
$($(".container3 figcaption")[2]).text("Fig.3 -Orange Juice");

/* task 4 */
$(".container4 .my-name").css("color","blue");
$(".container4 tr td:nth-child(odd)").css("background-color","pink")
$(".container4  table:first-of-type  tr:last-of-type  td:nth-of-type(2)").css("font-weight","bold")

/* task 5 */
$(".container5 ul li:nth-child(2)").css("font-style","italic")
$(".container5 ol li:nth-child(2)").next().css("color","red")
