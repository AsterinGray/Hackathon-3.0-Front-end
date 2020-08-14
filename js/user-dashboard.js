$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

$('#exampleModalCenter').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var recipient = button.data('whatever') // Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
var modal = $(this)
modal.find('#display-image').attr('src',recipient)
})

var countDownDate = new Date("Jun 22, 2020 16:10:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = hours + ":"
  + minutes + ":" + seconds + " left";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


$(function () {
  $('#myTab li:last-child a').tab('show')
})

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show') // Select third tab
$('#someTab').tab('show')


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



$(".payment-cross").click(function(){
  // getElementsByClassName("payment-cross").setAttribute("aria-expanded","false");
  let vertical = $(this).children(".vertical");
  if($(this).hasClass('expand')){
    $(this).removeClass("click-ani");
    vertical.css({"transform":"rotate(90deg)"});
    $(this).addClass("click-ani");
    $(this).removeClass("expand");
    $(this).removeAttr("id");
  }else{
    let a=$("#pay-expand").parent().next();
    $("#pay-expand").children('.vertical').css({"transform":"rotate(90deg)"});
    a.removeClass("show");
    $("#pay-expand").attr("aria-expanded","false");
    $("#pay-expand").removeClass("expand");
    $("#pay-expand").addClass("collapsed");
    $("#pay-expand").removeAttr("id");
    $(this).removeClass("click-ani");
    
    
    vertical.css({"transform":"rotate(-0deg)"});
    $(this).addClass("click-ani");
    $(this).addClass("expand");
    $(this).attr("id","pay-expand");
  }
})
     

$(window).resize(function(){
    if ( window.matchMedia("(max-width: 1024px)").matches){
      if ($("#hamburger").attr("aria-expanded")=="true"){
          $("#navbar").css({
            "height" : "auto",
            "flex" : "contents",
            "padding" : "1rem 2rem",
            "width" : "auto"}
          );
          $(".nav").css({
            "height":"100%",
            "margin-bottom":"5rem"
          });
          $("#navbar-hackathon-logo").css({
            "width":"75px"
          });
          $(".navbar-header").css({
            "visibility":"visible",
            "height":"auto",
            "width" : "100%"
          });
          $(".navbar-header-special").css({
            "visibility":"visible",
            "overflow":"visible",
            "margin-top" : "4rem"
          });
          $(".navbar-caption").css({
            "visibility":"visible",
            "overflow":"visible"
          });
          $(".navbar-caption-special").css({
            "visibility":"visible",
            "overflow":"visible",
            "margin-bottom":".75rem",
            "height":"auto"
          });    
          $(".navbar-caption-2").css({
            "visibility":"visible",
            "overflow":"visible",
            "width":"50%",
            "padding-left":"1rem"
          });
          $(".navbar-icon-c-2").css({
            "width":"50%",
            "padding-right":"1rem"
          })
          $(".navbar-footer").css({
            "visibility":"visible",
            "height":"auto",
            "width":"100%"
          });     
      }
      else{
        $("#hamburger").css({
          "visibility":"visible",
        })
        $("#navbar").css({
          "min-height":"unset",
          "height":"auto",
          "margin":"0"
        });
        $(".nav").css({
          "height":"0",
          "margin":"0"
        });
        $("#navbar-hackathon-logo").css({
          "width":"0"
        });
        $(".navbar-header-special").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0",
          "height":"0",
          "margin":"0",
          "padding":"0"
        });
        $(".navbar-caption").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0"
        });
        $(".navbar-caption-special").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0",
          "height":"0"
        });    
        $(".navbar-caption-2").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0"
        });   
        $(".navbar-footer").css({
          "visibility":"hidden",
          "width":"0",
          "height":"0",
          "overflow":"hidden"
        });   
      }
    } else{
      if ($("#hamburger").attr("aria-expanded")=="true"){
          $(".navbar-caption").css({
            "visibility":"visible",
            "overflow":"visible",
            "width":"55%",
            "margin":"0px 20px",
          });
          $(".navbar-header-special").css({
            "visibility":"visible",
            "overflow":"visible",
            "margin" : "10px 0",
            "height" : "auto",
            "width" : "100%",
            "align-items" : "center"
          });
          $("#navbar").css({
            "height":"95vh",
            "padding":"20px"
          });
          $(".nav").css({
            "height":"auto",
            "margin":"0",
            "margin-bottom":"20px"
          })
          $("#navbar-hackathon-logo").css({
            "width":"50px"
          }); 
          $(".navbar-caption-special").css({
            "visibility":"visible",
            "overflow":"visible",
            "width":"55%",
            "height":"auto",
            "margin-left":"1rem"
          });    
          $(".navbar-caption-2").css({
            "visibility":"visible",
            "overflow":"visible",
            "width":"55%",
            "padding-left":"1rem"
          });
          $(".navbar-footer").css({
            "visibility":"visible",
            "width":"100%",
            "height":"auto",
            "overflow":"unset"
          });     
      }
      else{
        $("#navbar").css({
          "height":"95vh",
          "padding":"20px"
        });
        $(".nav").css({
          "height":"auto",
          "margin":"0",
          "margin-bottom":"20px"
        })
        $(".navbar-header-special").css({
          "visibility":"visible",
          "overflow":"visible",
          "margin" : "10px 0",
          "height" : "auto",
          "width" : "100%",
          "align-items" : "center"
        });
        $(".navbar-caption").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0",
          "margin":"0"
        });
        $(".navbar-caption-special").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0",
          "height":"auto",
          "margin":"0"
        });
        $("#navbar-hackathon-logo").css({
          "width":"50px"
        });    
        $(".navbar-caption-2").css({
          "visibility":"hidden",
          "overflow":"hidden",
          "width":"0",
          "margin":"0",
          "padding":"0"
        }); 
        $(".navbar-footer").css({
          "visibility":"hidden",
          "width":"0%",
          "margin":"0",
          "overflow":"hidden"
        });
  
      }
    }
});



$("#hamburger").click(function(){
  if ( window.matchMedia("(max-width: 1024px)").matches){
    if ($(this).attr("aria-expanded")=="false"){
        $(this).attr("aria-expanded","true");
        $("#navbar").css({
          "height" : "auto",
          "flex" : "contents",
          "padding" : "1rem 2rem",
          "width" : "auto"}
        );
        $(".nav").css({
          "height":"100%",
          "margin-bottom":"5rem",
          "flex-direction":"column"
        });
        $("#navbar-hackathon-logo").css({
          "width":"75px"
        });
        $(".navbar-header").css({
          "visibility":"visible",
          "height":"auto",
          "width" : "100%"
        });
        $(".navbar-header-special").css({
          "visibility":"visible",
          "overflow":"visible",
          "margin-top" : "4rem"
        });
        $(".navbar-caption").css({
          "visibility":"visible",
          "overflow":"visible"
        });
        $(".navbar-caption-special").css({
          "visibility":"visible",
          "overflow":"visible",
          "margin-bottom":".75rem",
          "height":"auto"
        });    
        $(".navbar-caption-2").css({
          "visibility":"visible",
          "overflow":"visible",
          "width":"50%",
          "padding-left":"1rem"
        });
        $(".navbar-icon-c-2").css({
          "width":"50%",
          "padding-right":"1rem"
        })
        $(".navbar-footer").css({
          "visibility":"visible",
          "height":"auto",
          "width":"100%"
        });     
    }
    else{
      $(this).attr("aria-expanded","false");
      $(this).css({
        "visibility":"visible",
      })
      $("#navbar").css({
        "min-height":"unset",
        "height":"auto",
        "margin":"0"
      });
      $(".nav").css({
        "height":"0",
        "margin":"0"
      });
      $("#navbar-hackathon-logo").css({
        "width":"0"
      });
      $(".navbar-header-special").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0",
        "height":"0",
        "margin":"0",
        "padding":"0"
      });
      $(".navbar-caption").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0"
      });
      $(".navbar-caption-special").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0",
        "height":"0"
      });    
      $(".navbar-caption-2").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0"
      });   
      $(".navbar-footer").css({
        "visibility":"hidden",
        "width":"0",
        "height":"0",
        "overflow":"hidden"
      });   
    }
  } else{
    if ($(this).attr("aria-expanded")=="false"){
      $(this).attr("aria-expanded","true");
        $(".navbar-caption").css({
          "visibility":"visible",
          "overflow":"visible",
          "width":"55%",
          "margin":"0px 20px"
        });
        $(".navbar-caption-special").css({
          "visibility":"visible",
          "overflow":"visible",
          "width":"55%",
          "margin-left":"1rem"
        });    
        $(".navbar-caption-2").css({
          "visibility":"visible",
          "overflow":"visible",
          "width":"55%",
          "padding-left":"1rem"
        });
        $(".navbar-icon-c-2").css({
          "width":"40%",
          "padding-right":"0rem"
        }) 
        $(".navbar-footer").css({
          "visibility":"visible",
          "width":"100%",
          "height":"auto",
          "overflow":"unset"
        });     
    }
    else{
      $(this).attr("aria-expanded","false");
      $("#navbar").css({
        "height":"95vh"
      });
      $(".nav").css({
        "flex-direction":"column"
      })
      $(".navbar-caption").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0",
        "margin":"0"
      });
      $(".navbar-caption-special").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0",
        "margin":"0"
      });    
      $(".navbar-caption-2").css({
        "visibility":"hidden",
        "overflow":"hidden",
        "width":"0",
        "margin":"0",
        "padding":"0"
      });
      $(".navbar-icon-c-2").css({
        "width":"40%",
        "padding-right":"0rem"
      }) 
      $(".navbar-footer").css({
        "visibility":"hidden",
        "width":"0%",
        "margin":"0",
        "overflow":"hidden"
      });

    }
  }
  });

    // const changeFile = (e) => {
    //   var fileName = e.files[0].name;
    //   $("#file-name").text(fileName);
    //   $("#file-status").text("Pending");
    //   if(fileName.includes(".jpg") || fileName.includes(".png")){
    //   setTimeout(function(){$("#payment-form").submit()}, 500)
    //   $(e).next("p").text("");
    //   }else{
    //   console.log($(e).find("p"));
    //   $(e).next("p").text("File extension must be png or jpg");
    //   }
    //   }
  
const expandForm = (e) => {
  const addMember = $(e).closest(".add-member");
  if(addMember.height() == 40){
    $(e).children(".plus").css({ "transform": "rotate(0deg)" });
    addMember.css({ "height": "100%", "background-color": "#2C3044" })
  } else {
    addMember.css({ "height": "5rem", "background-color": "#E74C3C" })
    $(e).children(".plus").css({ "transform": "rotate(90deg)" });
  }
}