function view(a){
    var b=document.getElementById("display-image");
    b.setAttribute("src",a);
    document.getElementById("display-c").style="display:block;";
    document.getElementById("barrier").style="display:block; opacity:.5";
}
let a=$("#barrier");
if(a.is(':visible')){
    $("#barrier").click(function(){
        $(this).css({"display":"none"});
        $("#display-c").css({"display":"none"});
})}
function switchToggle(current,a){
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("on")[0].classList.remove("on");
    document.getElementById(a).classList.add("on")
    current.classList.add("active");
}
function editGroup(){
    document.getElementById("participant").classList.remove("on");
    document.getElementById("editgroup").classList.add("on");
}
$("#navbar").mouseenter(function(){
    $(".navbar-caption").css({"display":"flex"});    
})
$("#navbar").mouseleave(function(){
    $(".navbar-caption").css({"display":"none"});
})