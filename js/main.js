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

  //FAQ Animation
  $(".circle").click(function(){
    let q = $(this).parent();
    let a = q.next();
    let active = $(".circle").parent(".faq-active");
    let vertical = $(this).children(".vertical");
    if(a.is(":hidden")){
      $(this).removeClass("click-ani");
      active.css({"background-position":"initial"});
      active.next().css({"background-position":"initial"});
      active.next().slideToggle();
      active.children(".circle").children(".vertical").css({"transform":"rotate(90deg)"});
      active.removeClass("faq-active");
      q.addClass("faq-active");
      q.css({"background-position":"0 100%"});
      vertical.css({"transform":"rotate(-0deg)"});
      a.slideToggle();
      a.css({"background-position":"0 -100%"});
      $(this).addClass("click-ani");
    }else{
      $(this).removeClass("click-ani");
      q.css({"background-position":"initial"});
      a.css({"background-position":"initial"});
      vertical.css({"transform":"rotate(90deg)"});
      q.removeClass("faq-active");
      a.slideToggle();
      $(this).addClass("click-ani");
    }
})