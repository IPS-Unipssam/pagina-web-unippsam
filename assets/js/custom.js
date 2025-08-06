jQuery(document).ready(function($) {
    "use strict";
  
    // Tabs
    $(function() {
      $("#tabs").tabs();
    });
  
    // Page loading animation
    $("#preloader").animate({
      'opacity': '0'
    }, 600, function() {
      setTimeout(function() {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  
    // Header background change on scroll
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  
    // Owl Carousel: Testimonials
    $(document).ready(function () {
      if ($('.owl-gallery').length) {
        $('.owl-gallery').owlCarousel({
          loop: true,         // Habilitar looping
          nav: false,         // Sin flechas de navegación
          dots: true,         // Habilitar los puntos
          items: 3,           // Número de elementos visibles
          margin: 10,         // Espaciado entre elementos
          autoplay: true,     // Reproducción automática
          smartSpeed: 700,    // Velocidad de transición
          autoplayTimeout: 3000, // Tiempo entre transiciones
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
      }
    });

    $(document).ready(function(){
    $(".gallery-carousel").owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
      }
    });
  });
  
    
  

  // Owl Carousel: Partners
if ($('.owl-partners').length) {
  $('.owl-partners').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 3000,       // más tiempo entre cambios
    autoplayHoverPause: true,    // pausa si el usuario pasa el mouse
    smartSpeed: 1000,            // transición suave entre slides
    responsive: {
      0: { items: 1, margin: 6 },
      576: { items: 2, margin: 10 },
      992: { items: 4, margin: 12 }
    }
  });
}


  
    // Modern Slider
$(".Modern-Slider").slick({
  autoplay: true,
  autoplaySpeed: 10000, // Tiempo que cada slide se muestra (10s)
  speed: 1500, // Duración del cambio de slide (1.5s)
  fade: true, // Activar efecto de desvanecimiento
  cssEase: 'ease-in-out', // Transición suave
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  dots: true,
  pauseOnDotsHover: true,
  draggable: false,
  prevArrow: '<button class="PrevArrow"></button>',
  nextArrow: '<button class="NextArrow"></button>'
});

// Counter animation when visible
$(window).scroll(function() {
  $('.count-digit').each(function() {
    var $this = $(this);
    if ($this.hasClass('counter-loaded')) return;

    if ($this.is(':visible')) {
      $this.addClass('counter-loaded');
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter));
        }
      });
    }
  });
});

  
    // AOS Initialization
    AOS.init({
      once: false, // Animations trigger every time
      offset: 120 // Trigger offset
    });
  });
  