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
var formatted = "";
var myLength;
var formatted2 = "";
var myLength2;
var formatted3 = "";
var myLength3;

list.addEventListener("click", function (event) {
    if (document.querySelector(".listItems")){
      document.getElementById("wins").innerHTML = "";
        document.getElementById("nominations").innerHTML = "";
        document.getElementById("genres").innerHTML = "";
    }
    console.log(event.target.parentElement.id);
    formatted = actors[event.target.parentElement.id].nominations;
    //formatted = formatted.join(" ");
    myLength = formatted.length;
    for (var i =0; i < myLength; i++){
    var newListItem = document.createElement("li");
        newListItem.className = "listItems";
        newListItem.textContent = formatted[i];
        document.querySelector("#nominations").appendChild(newListItem);
    }
    
    formatted2 = actors[event.target.parentElement.id].wins;
    myLength2 = formatted2.length;
    for (var i =0; i < myLength2; i++){
    var newListItem2 = document.createElement("li");
        newListItem2.className = "listItems";
        newListItem2.textContent = formatted2[i];
        document.querySelector("#wins").appendChild(newListItem2);
    }
    
    formatted3 = actors[event.target.parentElement.id].genres;
    myLength3 = formatted3.length;
    for (var i =0; i < myLength3; i++){
    var newListItem3 = document.createElement("li");
        newListItem3.className = "listItems";
        newListItem3.textContent = formatted3[i];
        document.querySelector("#genres").appendChild(newListItem3);
    }
    
    document.querySelector("#name").textContent = actors[event.target.parentElement.id].name
    //document.querySelector("#nominations").textContent = formatted;
    //document.querySelector("#wins").textContent = actors[event.target.parentElement.id].wins
    //document.querySelector("#genres").textContent = actors[event.target.parentElement.id].genres
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

spacek = document.getElementById("spacek")
spacek.addEventListener("click", function () {
    console.log(actors["spacek"].wins);
    document.getElementById("modal").style.display = "block";
});

washington = document.getElementById("washington")
washington.addEventListener("click", function () {
    console.log(actors["washington"].wins);
    document.getElementById("modal").style.display = "block";
});

adams = document.getElementById("adams")
adams.addEventListener("click", function () {
    console.log(actors["adams"].wins);
    document.getElementById("modal").style.display = "block";
});

bancroft = document.getElementById("bancroft")
bancroft.addEventListener("click", function () {
    console.log(actors["bancroft"].wins);
    document.getElementById("modal").style.display = "block";
});

cooper = document.getElementById("cooper")
cooper.addEventListener("click", function () {
    console.log(actors["cooper"].wins);
    document.getElementById("modal").style.display = "block";
});

lewis = document.getElementById("lewis")
lewis.addEventListener("click", function () {
    console.log(actors["lewis"].wins);
    document.getElementById("modal").style.display = "block";
});

havilland = document.getElementById("havilland")
havilland.addEventListener("click", function () {
    console.log(actors["havilland"].wins);
    document.getElementById("modal").style.display = "block";
});

dicaprio = document.getElementById("dicaprio")
dicaprio.addEventListener("click", function () {
    console.log(actors["dicaprio"].wins);
    document.getElementById("modal").style.display = "block";
});

dunne = document.getElementById("dunne")
dunne.addEventListener("click", function () {
    console.log(actors["dunne"].wins);
    document.getElementById("modal").style.display = "block";
});

finney = document.getElementById("finney")
finney.addEventListener("click", function () {
    console.log(actors["finney"].wins);
    document.getElementById("modal").style.display = "block";
});

freeman = document.getElementById("freeman")
freeman.addEventListener("click", function () {
    console.log(actors["freeman"].wins);
    document.getElementById("modal").style.display = "block";
});

hackman = document.getElementById("hackman")
hackman.addEventListener("click", function () {
    console.log(actors["hackman"].wins);
    document.getElementById("modal").style.display = "block";
});

hanks = document.getElementById("hanks")
hanks.addEventListener("click", function () {
    console.log(actors["hanks"].wins);
    document.getElementById("modal").style.display = "block";
});

hayward = document.getElementById("hayward")
hayward.addEventListener("click", function () {
    console.log(actors["hayward"].wins);
    document.getElementById("modal").style.display = "block";
});

ahepburn = document.getElementById("ahepburn")
ahepburn.addEventListener("click", function () {
    console.log(actors["ahepburn"].wins);
    document.getElementById("modal").style.display = "block";
});

jones = document.getElementById("jones")
jones.addEventListener("click", function () {
    console.log(actors["jones"].wins);
    document.getElementById("modal").style.display = "block";
});

kennedy = document.getElementById("kennedy")
kennedy.addEventListener("click", function () {
    console.log(actors["kennedy"].wins);
    document.getElementById("modal").style.display = "block";
});

maclaine = document.getElementById("maclaine")
maclaine.addEventListener("click", function () {
    console.log(actors["maclaine"].wins);
    document.getElementById("modal").style.display = "block";
});

march = document.getElementById("march")
march.addEventListener("click", function () {
    console.log(actors["march"].wins);
    document.getElementById("modal").style.display = "block";
});

moore = document.getElementById("moore")
moore.addEventListener("click", function () {
    console.log(actors["moore"].wins);
    document.getElementById("modal").style.display = "block";
});

peck = document.getElementById("peck")
peck.addEventListener("click", function () {
    console.log(actors["peck"].wins);
    document.getElementById("modal").style.display = "block";
});

penn = document.getElementById("penn")
penn.addEventListener("click", function () {
    console.log(actors["penn"].wins);
    document.getElementById("modal").style.display = "block";
});

sarandon = document.getElementById("sarandon")
sarandon.addEventListener("click", function () {
    console.log(actors["sarandon"].wins);
    document.getElementById("modal").style.display = "block";
});

shearer = document.getElementById("shearer")
shearer.addEventListener("click", function () {
    console.log(actors["shearer"].wins);
    document.getElementById("modal").style.display = "block";
});

stewart = document.getElementById("stewart")
stewart.addEventListener("click", function () {
    console.log(actors["stewart"].wins);
    document.getElementById("modal").style.display = "block";
});

taylor = document.getElementById("taylor")
taylor.addEventListener("click", function () {
    console.log(actors["taylor"].wins);
    document.getElementById("modal").style.display = "block";
});

//closes actor window
$("#closebutton").on("click", function () {
    $("#modal").css('display', 'none');
});