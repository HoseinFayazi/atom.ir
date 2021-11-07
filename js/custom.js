$(document).ready(function(){
    
      //////////////////////////////////////////////
     //////////////    loader    //////////////////
    //////////////////////////////////////////////
    $("#loader").delay(200).fadeOut(200);

    //when user hover on menu item in computer or big tablets
    if($(document).width() >= 800) 
    {
        $(".menu-item").hover(function(){
            $(this).children(".sub-menu").fadeIn(400);
        });
        $(".menu-item").mouseleave(function(){
            $(this).children(".sub-menu").fadeOut(50);
        });
    }

    //when user click the menu icon(3line icon)
    $(".navbar-icon").click(function(){
        if($(this).hasClass("menu-open"))
        {
            $(this).removeClass("menu-open")
            $(".navbar-icon span:nth-child(1)").removeClass("rotate-line-1");
            $(".navbar-icon span:nth-child(2)").animate({
                "width":"80%"
            },500);
            $(".navbar-icon span:nth-child(3)").removeClass("rotate-line-3");
            $(".nav-menu").slideUp(200);
        }
        else
        {
            $(this).addClass("menu-open")
            $(".navbar-icon span:nth-child(1)").addClass("rotate-line-1");
            $(".navbar-icon span:nth-child(2)").animate({
                "width":"0%"
            },0);
            $(".navbar-icon span:nth-child(3)").addClass("rotate-line-3");
            $(".nav-menu").slideDown(200);
        }
    });

    //when user click the plus icon in menu items
    $(".plus-icon").click(function(){
        if($(this).hasClass("plus-icon-animate"))
        {
            $(this).removeClass("plus-icon-animate");
            $(this).addClass("plus-icon-animate-reverce");
            $(this).children("i:nth-child(1)").animate({"opacity":"1"},400);
            $(this).parent().siblings("ul.sub-menu").slideUp(400);
        }
        else
        {
            $(this).removeClass("plus-icon-animate-reverce");
            $(this).addClass("plus-icon-animate");
            $(this).children("i:nth-child(1)").animate({"opacity":"0"},400);
            $(this).parent().siblings("ul.sub-menu").slideDown(400);
        }
    });

    //reset document setting with reload...
    window.onresize=function() {
        if(window.innerWidth >= 800) {
            location.reload();
        }
    }

    //sticy menu 
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementsByTagName("nav")[0];
    var sticky = navbar.offsetTop;
    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    //when user click the top arrow icon in small device
    $(".top-arrow>button").click(function(){
        if($(this).hasClass("arrow-active")) {
            $(this).removeClass("arrow-active");
            $(".hac,.icons").removeClass("col-12");
            $(".hac").addClass("col-4");
            $(".icons").addClass("col-8");
            $(".hac-links").parent().removeClass("p-0");
            $(".hac-links").removeClass("hac-links-open");
            $(".hac-links").delay(0).slideUp(0);
        }else {
            $(this).addClass("arrow-active");
            $(".hac").removeClass("col-4");
            $(".icons").removeClass("col-8");
            $(".hac,.icons").addClass("col-12");
            $(".hac-links").parent().addClass("p-0");
            $(".hac-links").addClass("hac-links-open");
            $(".hac-links").delay(200).slideDown(400);
        }
    });

    //support persian number 
    /*var replaceDigits = function() {
        var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
        document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
    }
    window.onload = replaceDigits;*/

    // Add smooth scrolling to all links
  $("a#letsgo").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //sticky menu
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementsByTagName("nav")[0];
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    //in detail page==>whene user click any of buttons in theme info box
    $("#thdesc-btn").click(function(){
        $(".theme-infos-desc").siblings().fadeOut(0);
        $(".theme-infos-desc").fadeIn(200);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $("#thopt-btn").click(function(){
        $(".theme-infos-option").siblings().fadeOut(0);
        $(".theme-infos-option").fadeIn(200);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $("#thcom-btn").click(function(){
        $(".theme-infos-comment ").siblings().fadeOut(0);
        $(".theme-infos-comment").fadeIn(200);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    //when user click the show gallery btn=>in detail page
    $(".theme-gallery-imgs").slideUp(0);
    $("#showthegallery-btn").click(function(){
        $(".theme-gallery-imgs").slideToggle(200);
    });




      ////////////////////////////////////////////////////////////////////
     //////    this is login and signin box => for all pages    /////////
    ////////////////////////////////////////////////////////////////////
	$("#login-signin").fadeOut(0);
	$(".user-login-signin").click(function(){
		$("#login-signin").show(200);
	});
	$("#login-signin-close button").click(function(){
		$("#login-signin").hide(200);
	});
	$("#login-pointer-btn").click(function(){
		$("#signin-frm").fadeOut(0);
		$("#login-frm").fadeIn(200);
		$(this).addClass("active");
		$("#signin-pointer-btn").removeClass("active");
	});
	$("#signin-pointer-btn").click(function(){
		$("#login-frm").fadeOut(0);
		$("#signin-frm").fadeIn(200);
		$(this).addClass("active");
		$("#login-pointer-btn").removeClass("active");
	});
	




      ///////////////////////////////////////////////////////////////
     ////////////////    config slick lib for slide    /////////////
    ///////////////////////////////////////////////////////////////
    $('.most-sales-row').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    


});

