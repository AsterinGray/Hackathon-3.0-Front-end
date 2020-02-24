// $(".nav-link").hover(
//     function(){
//     $(".active").removeClass("active");
//     $(this).addClass("active");
// },
// function(){
//     $(this).removeClass("active");
//     $(".on").addClass("active")
// });

$(".nav-link").click(function(){
    $(".active").removeClass("active");
    $(".on").removeClass("on");
    $(this).addClass("active on");
})

$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        dots: true,
        centerPadding: '65px',
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1}},
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1}}]
    });
  });
