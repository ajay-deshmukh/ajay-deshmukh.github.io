// Main Javascript 

$(document).ready(function(){
    $("#landing-chevron").click(function() {
        $('html,body').animate({scrollTop: $("#details-container").offset().top},'slow');
    });
    $("#find-out-text").click(function() {
        $('html,body').animate({scrollTop: $("#details-container").offset().top},'slow');
    });
});

$(window).scroll(function (){
    var opac1 = ($("#heading-name").offset().top - $(window).scrollTop() + 50)/($("#heading-name").offset().top + 50);
    if(opac1<0) opac1 = 0;
    $("#heading-name").css("opacity",opac1);
    $("#heading-title").css("opacity",opac1);
    $("#landing-footer").css("opacity",opac1);


    var aboutTop = $("#about").offset().top;
    var aboutHeight = $("#about").height();
    //console.log(aboutTop+" "+aboutHeight+" "+$(window).scrollTop());
    var opac2 = (aboutTop - $(window).scrollTop() + 1.2*aboutHeight)/(aboutHeight);
    if(opac2>1) opac2 = 1;
    if(opac2<0) opac2 = 0;
    $("#internship-about").css("opacity",opac2);
    $("#internship-nav").css("opacity",1-opac2); 
});
