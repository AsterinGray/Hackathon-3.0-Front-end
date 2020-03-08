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

  function replace(a,b,x){
      var a1= document.getElementById("why-active-par").innerHTML;
      var a2=document.getElementById("why-active-image").attributes[2].value;
      var a3=document.getElementById("why-active-heading").innerHTML;
      document.getElementById("why-active-heading").innerHTML=a;
      document.getElementById("why-active-image").attributes[2].value="assets/img/why/"+b;
      document.getElementById("why-active-image").attributes[3].value=a;
      document.getElementById("why-active-par").innerHTML=x.lastChild.lastChild.innerHTML;

    //   Belum bisa swap content
  }