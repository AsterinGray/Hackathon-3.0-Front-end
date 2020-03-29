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

  function replace(x){
      var a1= document.getElementById("why-active-par").innerHTML;
      var a2=document.getElementById("why-active-image").attributes[2].value;
      var a3=document.getElementById("why-active-heading").innerHTML;
      document.getElementById("why-active-heading").innerHTML= x.children[1].children[0].innerHTML
      document.getElementById("why-active-image").attributes[2].value=x.children[0].attributes[1].value
      document.getElementById("why-active-par").innerHTML=x.children[1].children[1].children[0].innerHTML;
      x.children[0].attributes[1].value=a2;
      x.children[1].children[0].innerHTML=a3;
      x.children[1].children[1].children[0].innerHTML=a1;
     
    //   Belum bisa swap content
  }