/* buttons */

$("#women-button").click(function () {
    $(".women").fadeIn(100);
    $(".men").fadeOut(1000);
});
$("#men-button").click(function () {
    $(".men").fadeIn(100);
    $(".women").fadeOut(1000);
});
$("#nominees-button").click(function () {
    $(".nominee").fadeIn(10);
});

/* objects */

var actors;

otoole = document.getElementById("otoole")
otoole.addEventListener("click",function(){
  console.log(actors["otoole"].nominations)
})