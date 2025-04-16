sliderint = 1;
sliderNext = 2;

$(document).ready(function() {
    $("#slider > img#1").fadein(300);
    startSlider();
});

function startSlider(){ 
    count=$("#slider > img").size();
    loop=setInterval(function(){
        $("#slider > img").fadeout(300);
        $('#slider > img#' + sliderNext).fadein(300);

        sliderint = sliderNext;
        sliderNext = sliderNext + 1;

    },3000)
}
