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

/* loading data */

var list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    console.dir(event.target.parentElement.id);
    document.querySelector("ms").textContent = "Test" + actors[event.target.id].wins;
});

var actors; /* div for data */

//opens actor window
streep = document.getElementById("streep")
streep.addEventListener("click", function () {
    console.log(actors["streep"].wins);
    document.getElementById("ms").style.display = "block";
});
//closes actor window
$("#closebutton").on("click", function () {
    $("#ms").css('display', 'none');
});