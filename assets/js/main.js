/*** TABLE OF CONTENTS
======================================================
    0 / general
    1 / menu toggle
    2 / call the Owl initializer functions
    3 / call the slick functions
    4 / all the  feather icons function
    5 /  call  AOS function
    6 / call  Lazy function
    7 /  call  Typed function
    8 /  call  StickySidebar function
    =================================================== ***/
$(function () {
    ("use strict");
    // Click event to scroll to top.
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
            $('.back-to-top').addClass('show-back-to-top');
        } else {
            $('.back-to-top').removeClass('show-back-to-top');
        }
    });
    // Click event to scroll to top.
    $('.back-to-top').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // ============================= 1/ menu toggle
    $(".menu-toggle-icon").on("click", function () {
        $(".mobile-overlay").addClass("mobile-visible");
    });
    $(".mobile-overlay-bg , .close-mobile-menu").on("click", function () {
        $(".mobile-overlay").removeClass("mobile-visible");
    });

    // =================
    $('.has-dropdown-m').click(function(e) {
        e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('li .dropdown-mobile').removeClass('show');
          $this.parent().parent().find('li .dropdown-mobile').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });

    // $(".has-dropdown-m").on("click", function (e) {
    //    $(".dropdown-mobile").slideToggle();
    //     $(this).toggleClass("color-secondary");

    // });
    // =========================== 2/ call the Owl initializer functions
    $('#owl1')
        .owlCarousel({
            margin: 20,
            loop: true,
            autoWidth: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            },
            autoplay: true,
            autoplayTimeout: 2000,
        });
    $('#owl2')
        .owlCarousel({
            loop: true,
            autoWidth: false,
            responsiveClass: true,

            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            },
            autoplay: true,
            autoplayTimeout: 4000,
        });
    $('.testi3').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1024: {
                items: 2
            }
        }
    })
    /*! Fades out the whole page when clicking links */
    $('.fade-page').on("click", function (e) {
        e.preventDefault();
        newLocation = this.href;
        $('body').fadeOut('slow', newpage);
    });
    // ============================ 3/ call the slick functions
    $('.work-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    $('.testi-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
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
    $('.blog-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
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
    $('.feautures-boxes-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    $('.clients-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
    // ============================ 4/ call the  feather icons function
    feather.replace();
    // ============================  5/ call  AOS function
    AOS.init();
    AOS.init({
        offset: 10,
        once: true,
    });
    function newpage() {
        window.location = newLocation;
    }

    $(".se-pre-con").fadeOut("slow");
    var btn = $('.to-top');
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});

// =================== price changes only  javascript used 
var e = document.getElementById("filt-monthly"),
    d = document.getElementById("filt-hourly"),
    t = document.getElementById("switcher"),
    m = document.getElementById("monthly"),
    y = document.getElementById("yearly");

e.addEventListener("click", function(){
  t.checked = false;
  e.classList.add("toggler--is-active");
  d.classList.remove("toggler--is-active");
  m.classList.remove("hidden");
  y.classList.add("hidden");
});

d.addEventListener("click", function(){
  t.checked = true;
  d.classList.add("toggler--is-active");
  e.classList.remove("toggler--is-active");
  m.classList.add("hidden");
  y.classList.remove("hidden");
});

t.addEventListener("click", function(){
  d.classList.toggle("toggler--is-active");
  e.classList.toggle("toggler--is-active");
  m.classList.toggle("hidden");
  y.classList.toggle("hidden");
})


