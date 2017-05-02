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
var actors = document.querySelector("ul");
    
streep.addEventListener("click",function(){
console.log(actors[event.target.id]);
    
document.querySelector("streep").textContent = actors[event.target.id].nominations;
}) 


/* 

khepburn = document.getElementById("khepburn")
khepburn.addEventListener("click",function(){
  console.log(actors["khepburn"].films)
})

nicholson = document.getElementById("nicholson")
nicholson.addEventListener("click",function(){
  console.log(actors["nicholson"].wins)
})

davis = document.getElementById("davis")
davis.addEventListener("click",function(){
  console.log(actors["davis"].genres)
})

olivier = document.getElementById("olivier")
olivier.addEventListener("click",function(){
  console.log(actors["olivier"].nominations)
})

newman = document.getElementById("newman")
newman.addEventListener("click",function(){
  console.log(actors["newman"].wins)
})

tracy = document.getElementById("tracy")
tracy.addEventListener("click",function(){
  console.log(actors["tracy"].nominations)
})

brando = document.getElementById("brando")
brando.addEventListener("click",function(){
  console.log(actors["brando"].wins)
})

lemmon = document.getElementById("lemmon")
lemmon.addEventListener("click",function(){
  console.log(actors["lemmon"].genres)
})

otoole = document.getElementById("otoole")
otoole.addEventListener("click",function(){
  console.log(actors["otoole"].name)
})

pacino = document.getElementById("pacino")
pacino.addEventListener("click",function(){
  console.log(actors["pacino"].nominations)
})

page = document.getElementById("page")
page.addEventListener("click",function(){
  console.log(actors["page"].genres)
})

bergman = document.getElementById("bergman")
bergman.addEventListener("click",function(){
  console.log(actors["bergman"].wins)
})

blanchett = document.getElementById("blanchett")
blanchett.addEventListener("click",function(){
  console.log(actors["blanchett"].name)
})

burton = document.getElementById("burton")
burton.addEventListener("click",function(){
  console.log(actors["burton"].nominations)
})

dench = document.getElementById("dench")
dench.addEventListener("click",function(){
  console.log(actors["dench"].wins)
})

deniro = document.getElementById("deniro")
deniro.addEventListener("click",function(){
  console.log(actors["deniro"].genres)
})

duvall = document.getElementById("duvall")
duvall.addEventListener("click",function(){
  console.log(actors["duvall"].name)
})

fonda = document.getElementById("fonda")
fonda.addEventListener("click",function(){
  console.log(actors["fonda"].nominations)
})

garson = document.getElementById("garson")
garson.addEventListener("click",function(){
  console.log(actors["garson"].wins)
})

hoffman = document.getElementById("hoffman")
hoffman.addEventListener("click",function(){
  console.log(actors["hoffman"].genres)
})

winslet = document.getElementById("winslet")
winslet.addEventListener("click",function(){
  console.log(actors["winslet"].nominations)
})

bridges = document.getElementById("bridges")
bridges.addEventListener("click",function(){
  console.log(actors["bridges"].wins)
})

burstyn = document.getElementById("burstyn")
burstyn.addEventListener("click",function(){
  console.log(actors["burstyn"].genres)
})

caine = document.getElementById("caine")
caine.addEventListener("click",function(){
  console.log(actors["caine"].nominations)
})

close = document.getElementById("close")
close.addEventListener("click",function(){
  console.log(actors["close"].nominations)
})

kerr = document.getElementById("kerr")
kerr.addEventListener("click",function(){
  console.log(actors["kerr"].name)
})

lange = document.getElementById("lange")
lange.addEventListener("click",function(){
  console.log(actors["lange"].wins)
})

redgrave = document.getElementById("redgrave")
redgrave.addEventListener("click",function(){
  console.log(actors["redgrave"].genres)
})

ritter = document.getElementById("ritter")
ritter.addEventListener("click",function(){
  console.log(actors["ritter"].nominations)
})

smith = document.getElementById("smith")
smith.addEventListener("click",function(){
  console.log(actors["smith"].genres)
})

spacek = document.getElementById("spacek")
spacek.addEventListener("click",function(){
  console.log(actors["spacek"].wins)
})

washington = document.getElementById("washington")
washington.addEventListener("click",function(){
  console.log(actors["washington"].nominations)
})

adams = document.getElementById("adams")
adams.addEventListener("click",function(){
  console.log(actors["adams"].nominations)
})

bancroft = document.getElementById("bancroft")
bancroft.addEventListener("click",function(){
  console.log(actors["bancroft"].name)
})

cooper = document.getElementById("cooper")
cooper.addEventListener("click",function(){
  console.log(actors["cooper"].wins)
})

lewis = document.getElementById("lewis")
lewis.addEventListener("click",function(){
  console.log(actors["lewis"].genres)
})

havilland = document.getElementById("havilland")
havilland.addEventListener("click",function(){
  console.log(actors["havilland"].nominations)
})

dicaprio = document.getElementById("dicaprio")
dicaprio.addEventListener("click",function(){
  console.log(actors["dicaprio"].genres)
})

dunne = document.getElementById("dunne")
dunne.addEventListener("click",function(){
  console.log(actors["dunne"].wins)
})

finney = document.getElementById("finney")
finney.addEventListener("click",function(){
  console.log(actors["finney"].nominations)
})

freeman = document.getElementById("freeman")
freeman.addEventListener("click",function(){
  console.log(actors["freeman"].nominations)
})

hackman = document.getElementById("hackman")
hackman.addEventListener("click",function(){
  console.log(actors["hackman"].name)
})

hanks = document.getElementById("hanks")
hanks.addEventListener("click",function(){
  console.log(actors["hanks"].wins)
})

hayward = document.getElementById("hayward")
hayward.addEventListener("click",function(){
  console.log(actors["hayward"].genres)
})

ahepburn = document.getElementById("ahepburn")
ahepburn.addEventListener("click",function(){
  console.log(actors["ahepburn"].nominations)
})

jones = document.getElementById("jones")
jones.addEventListener("click",function(){
  console.log(actors["jones"].genres)
})

kennedy = document.getElementById("kennedy")
kennedy.addEventListener("click",function(){
  console.log(actors["kennedy"].wins)
})

maclaine = document.getElementById("maclaine")
maclaine.addEventListener("click",function(){
  console.log(actors["maclaine"].nominations)
})

march = document.getElementById("march")
march.addEventListener("click",function(){
  console.log(actors["march"].nominations)
})

moore = document.getElementById("moore")
moore.addEventListener("click",function(){
  console.log(actors["moore"].name)
})

peck = document.getElementById("peck")
peck.addEventListener("click",function(){
  console.log(actors["peck"].wins)
})

penn = document.getElementById("penn")
penn.addEventListener("click",function(){
  console.log(actors["penn"].genres)
})

sarandon = document.getElementById("sarandon")
sarandon.addEventListener("click",function(){
  console.log(actors["sarandon"].nominations)
})

shearer = document.getElementById("shearer")
shearer.addEventListener("click",function(){
  console.log(actors["shearer"].genres)
})

stewart = document.getElementById("stewart")
stewart.addEventListener("click",function(){
  console.log(actors["stewart"].wins)
})

taylor = document.getElementById("taylor")
taylor.addEventListener("click",function(){
  console.log(actors["taylor"].nominations)
}) */