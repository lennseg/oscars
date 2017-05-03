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
    console.log(event.target.parentElement.id);
    document.querySelector("#name").textContent = actors[event.target.parentElement.id].name
    document.querySelector("#nominations").textContent = actors[event.target.parentElement.id].nominations
    document.querySelector("#wins").textContent = actors[event.target.parentElement.id].wins
    document.querySelector("#genres").textContent = actors[event.target.parentElement.id].genres
});

/* div for data */

var actors; 
//opens actor window
streep = document.getElementById("streep")
streep.addEventListener("click", function () {
    console.log(actors["streep"].wins);
    document.getElementById("modal").style.display = "block";
});

khepburn = document.getElementById("khepburn")
khepburn.addEventListener("click", function () {
    console.log(actors["khepburn"].wins);
    document.getElementById("modal").style.display = "block";
});

nicholson = document.getElementById("nicholson")
nicholson.addEventListener("click", function () {
    console.log(actors["nicholson"].wins);
    document.getElementById("modal").style.display = "block";
});

//closes actor window
$("#closebutton").on("click", function () {
    $("#modal").css('display', 'none');
});