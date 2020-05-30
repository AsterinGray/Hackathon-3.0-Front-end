//Navbar link
$(".nav-link").click(function(){
    $(".active").removeClass("active");
    $(".on").removeClass("on");
    $(this).addClass("active on");
})

//Carousel
$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        dots: true,
        centerPadding: '65px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 500,
        // autoplaySpeed: 1500,
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

//Why change content
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
}
  
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

//Timeline Animation
{
  const colors = ['#3498DB', '#E74C3C', '#463991'];
  const bubbles = 30;

  function explode(x, y){
    let particles = [];
    let ratio = window.devicePixelRatio;
    let c = document.createElement('canvas');
    let ctx = c.getContext('2d');

    c.style.position = 'absolute';
    c.style.left = x - 100 + 'px';
    c.style.top = y - 100 + 'px';
    c.style.pointerEvents = 'none';
    c.style.width = 200 + 'px';
    c.style.height = 200 + 'px';
    c.style.zIndex = 100;
    c.width = 500 * ratio;
    c.height = 500 * ratio;
    document.body.appendChild(c);

    for (var i = 0; i < bubbles; i++) {
      particles.push({
        x: c.width / 2,
        y: c.height / 2,
        radius: r(20, 30),
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: r(0, 360, true),
        speed: r(0, 15),
        friction: 1,
        opacity: r(0.5, 1, true),
        yVel: 0,
        gravity: 0 });
    }

    render(particles, ctx, c.width, c.height);
    setTimeout(() => document.body.removeChild(c), 1000);
  };

  function render(particles, ctx, width, height){
    requestAnimationFrame(() => render(particles, ctx, width, height));
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
      p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

      p.opacity -= 0.01;
      p.speed *= p.friction;
      p.radius *= p.friction;
      p.yVel += p.gravity;
      p.y += p.yVel;

      if (p.opacity < 0 || p.radius < 0) return;

      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    });

    return ctx;
  };

  const r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
}

let dot = $('#timeline-dot-active');
let target = dot.offset().top - 200;
$(window).scroll(function(){
  if($(window).scrollTop() > target){
    dot.one().trigger(e => explode(e.pageX, e.pageY)) ;
  }
})

dot.click(e => explode(e.pageX, e.pageY));