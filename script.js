$(document).ready(function(){
    //toggle menu/navbar sript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a BSc Physics Student", "interested in Cosmology", "a Data Science enthusiast", "a Programming enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});