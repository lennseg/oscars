$("#women-button").click(function () {
    $(".women").fadeIn(100);
    $(".men").fadeOut(1000);
});

$("#men-button").click(function () {
    //$("#men-button").css("background", "#b5b8bd");
    $(".men").fadeIn(100);
    $(".women").fadeOut(1000);
});
$("#nominees-button").click(function () {
    $(".nominee").fadeIn(10);
});