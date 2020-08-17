window.alamat='payment';
window.alamatIndex=0;
function view(a){
    var b=document.getElementById("display-image");
    b.setAttribute("src",a);
    document.getElementById("display-c").style="display:block;";
    document.getElementById("barrier").style="display:block; opacity:.5";
}
$("#barrier").click(function(){
    $(this).css({"display":"none"});
    $("#display-c").css({"display":"none"});
})
function switchToggle(current,a){
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("on")[0].classList.remove("on");
    document.getElementById(a).classList.add("on")
    current.classList.add("active");
}   

function defaultToggle(){
    $("#"+alamat).addClass("on");
    console.log(alamat);
    document.getElementsByClassName("navbar-content")[alamatIndex].classList.add("active");
}

function switchToggle2(a){
    window.alamat=a;
    console.log(a);
    if (a=="payment")
        alamatIndex=0;
    else
        alamatIndex=1;
    window.location.href="admin-panel.html";

}

function editGroup(){
    window.location.href="admin-panel-edit.html"
}
function viewGroup(){
    window.location.href="admin-panel-view.html"
}

$('#staticBackdrop').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  })

  $("#hamburger").click(function(){
    if ( window.matchMedia("(max-width: 1024px)").matches){
        if ($(this).attr("aria-expanded")=="false"){
            $(this).attr("aria-expanded","true");
            $(".navbar-caption").css({"display":"flex"});
            $(".navbar-content").css({
                "height":"75px",
                "visibility":"visible"
            });
            $(".navbar-content-c").css({
                "height":"300px"
            });
        }
        else{
            $(this).attr("aria-expanded","false");
            $(".navbar-caption").css({"display":"none"});
            $(".navbar-content").css({
                "height":"0px",
                "visibility":"hidden"
            });
            $(".navbar-content-c").css({
                "height":"0px"
            });
    }}
    else{
        if ($(this).attr("aria-expanded")=="false"){
            $(this).attr("aria-expanded","true");
            $(".navbar-caption").css({"display":"flex"});
            $(".navbar-caption-2").css({"display":"flex"});
        }
        else{
            $(this).attr("aria-expanded","false");
            $(".navbar-caption").css({"display":"none"});
            $(".navbar-caption-2").css({"display":"none"});
            
    }
    }   
});

$(window).resize(function(){
    if ( window.matchMedia("(max-width: 1024px)").matches){
        if ($(this).attr("aria-expanded")=="true"){
            $(".navbar-caption").css({"display":"flex"});
            $(".navbar-content").css({
                "height":"75px",
                "visibility":"visible"
            });
            $(".navbar-caption-2").css({"display":"none"});
            $(".navbar-content-c").css({
                "height":"300px"
            });
        }
        else{
            $(".navbar-caption").css({"display":"none"});
            $(".navbar-content").css({
                "height":"0px",
                "visibility":"hidden"
            });
            $(".navbar-content-c").css({
                "height":"0px"
            });
    }}
    else{
        if ($(this).attr("aria-expanded")=="true"){
            $(".navbar-caption").css({"display":"flex"});
            $(".navbar-caption-2").css({"display":"flex"});
            $(".navbar-content").css({
                "height":"75px",
                "visibility":"visible"
            });
        }
        else{
            $(".navbar-caption").css({"display":"none"});
            $(".navbar-caption-2").css({"display":"none"});
            $(".navbar-content").css({
                "height":"75px",
                "visibility":"visible"
            });
        }
            
    }
});