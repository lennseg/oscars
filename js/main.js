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

/* testing data */

var actors;

khepburn = document.getElementById("khepburn")
khepburn.addEventListener("click",function(){
  console.log(actors["khepburn"].films)
})

/* parse data */
$(document).ready(function() {
    $.ajax ({
        type: 'GET',
        url: 'data/data.json',
        dataType:'json',
        success: jsonParser
    });
});
    
function jsonParser(json) {
    $('#load').fadeOut();
     $.getJSON('data/data.json',function(json){
         $.each(data.actors.streep,function(k,v){
             var name = v.name;
             var nominations = v.nominations;
             var wins = v.wins;
             var genres = v.genres;
             $('#container').append('div class="streep"> + nominations + </div>')
         });
    });
}