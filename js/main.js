//buttons
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

//getting data from json file
var list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    console.log(event.target.parentElement.id);
    document.querySelector("#name").textContent = actors[event.target.parentElement.id].name
    document.querySelector("#nominations").textContent = actors[event.target.parentElement.id].nominations
    document.querySelector("#wins").textContent = actors[event.target.parentElement.id].wins
    document.querySelector("#genres").textContent = actors[event.target.parentElement.id].genres
});

//opens actor window
var actors; 

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

davis = document.getElementById("davis")
davis.addEventListener("click", function () {
    console.log(actors["davis"].wins);
    document.getElementById("modal").style.display = "block";
});

olivier = document.getElementById("olivier")
olivier.addEventListener("click", function () {
    console.log(actors["olivier"].wins);
    document.getElementById("modal").style.display = "block";
});

newman = document.getElementById("newman")
newman.addEventListener("click", function () {
    console.log(actors["newman"].wins);
    document.getElementById("modal").style.display = "block";
});

tracy = document.getElementById("tracy")
tracy.addEventListener("click", function () {
    console.log(actors["tracy"].wins);
    document.getElementById("modal").style.display = "block";
});

brando = document.getElementById("brando")
brando.addEventListener("click", function () {
    console.log(actors["brando"].wins);
    document.getElementById("modal").style.display = "block";
});

lemmon = document.getElementById("lemmon")
lemmon.addEventListener("click", function () {
    console.log(actors["lemmon"].wins);
    document.getElementById("modal").style.display = "block";
});

otoole = document.getElementById("otoole")
otoole.addEventListener("click", function () {
    console.log(actors["otoole"].wins);
    document.getElementById("modal").style.display = "block";
});

pacino = document.getElementById("pacino")
pacino.addEventListener("click", function () {
    console.log(actors["pacino"].wins);
    document.getElementById("modal").style.display = "block";
});

page = document.getElementById("page")
page.addEventListener("click", function () {
    console.log(actors["page"].wins);
    document.getElementById("modal").style.display = "block";
});

bergman = document.getElementById("bergman")
bergman.addEventListener("click", function () {
    console.log(actors["bergman"].wins);
    document.getElementById("modal").style.display = "block";
});

blanchett = document.getElementById("blanchett")
blanchett.addEventListener("click", function () {
    console.log(actors["blanchett"].wins);
    document.getElementById("modal").style.display = "block";
});

burton = document.getElementById("burton")
burton.addEventListener("click", function () {
    console.log(actors["burton"].wins);
    document.getElementById("modal").style.display = "block";
});

dench = document.getElementById("dench")
dench.addEventListener("click", function () {
    console.log(actors["dench"].wins);
    document.getElementById("modal").style.display = "block";
});

deniro = document.getElementById("deniro")
deniro.addEventListener("click", function () {
    console.log(actors["deniro"].wins);
    document.getElementById("modal").style.display = "block";
});

duvall = document.getElementById("duvall")
duvall.addEventListener("click", function () {
    console.log(actors["duvall"].wins);
    document.getElementById("modal").style.display = "block";
});

fonda = document.getElementById("fonda")
fonda.addEventListener("click", function () {
    console.log(actors["fonda"].wins);
    document.getElementById("modal").style.display = "block";
});

garson = document.getElementById("garson")
garson.addEventListener("click", function () {
    console.log(actors["garson"].wins);
    document.getElementById("modal").style.display = "block";
});

hoffman = document.getElementById("hoffman")
hoffman.addEventListener("click", function () {
    console.log(actors["hoffman"].wins);
    document.getElementById("modal").style.display = "block";
});

winslet = document.getElementById("winslet")
winslet.addEventListener("click", function () {
    console.log(actors["winslet"].wins);
    document.getElementById("modal").style.display = "block";
});

bridges = document.getElementById("bridges")
bridges.addEventListener("click", function () {
    console.log(actors["bridges"].wins);
    document.getElementById("modal").style.display = "block";
});

burstyn = document.getElementById("burstyn")
burstyn.addEventListener("click", function () {
    console.log(actors["burstyn"].wins);
    document.getElementById("modal").style.display = "block";
});

caine = document.getElementById("caine")
caine.addEventListener("click", function () {
    console.log(actors["caine"].wins);
    document.getElementById("modal").style.display = "block";
});

close = document.getElementById("close")
close.addEventListener("click", function () {
    console.log(actors["close"].wins);
    document.getElementById("modal").style.display = "block";
});

kerr = document.getElementById("kerr")
kerr.addEventListener("click", function () {
    console.log(actors["kerr"].wins);
    document.getElementById("modal").style.display = "block";
});

lange = document.getElementById("lange")
lange.addEventListener("click", function () {
    console.log(actors["lange"].wins);
    document.getElementById("modal").style.display = "block";
});

redgrave = document.getElementById("redgrave")
redgrave.addEventListener("click", function () {
    console.log(actors["redgrave"].wins);
    document.getElementById("modal").style.display = "block";
});

ritter = document.getElementById("ritter")
ritter.addEventListener("click", function () {
    console.log(actors["ritter"].wins);
    document.getElementById("modal").style.display = "block";
});

smith = document.getElementById("smith")
smith.addEventListener("click", function () {
    console.log(actors["smith"].wins);
    document.getElementById("modal").style.display = "block";
});

//closes actor window
$("#closebutton").on("click", function () {
    $("#modal").css('display', 'none');
});