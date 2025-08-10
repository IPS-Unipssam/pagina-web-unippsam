// =========================
// MAIN.JS – Unificado, Optimizado y Limpio
// =========================

(function () {
  "use strict";

  // =========================
  // Funciones globales para HTML (para evitar ReferenceError)
  // =========================
  window.showHelpText = function () {
    const helpText = document.getElementById("help-text");
    if (window.innerWidth > 768 && helpText) {
      helpText.style.opacity = "1";
      helpText.style.transform = "translateX(0)";
    }
  };

  window.hideHelpText = function () {
    const helpText = document.getElementById("help-text");
    if (window.innerWidth > 768 && helpText) {
      helpText.style.opacity = "0";
      helpText.style.transform = "translateX(-10px)";
    }
  };

  // =========================
  // DOM Ready
  // =========================
  document.addEventListener("DOMContentLoaded", () => {

    // --------------------
    // 1. MODAL DE BIENVENIDA
    // --------------------
    const modal = document.getElementById("welcomeModal");
    const closeModalBtn = document.getElementById("closeModal");

    if (modal && closeModalBtn && sessionStorage.getItem("modalDismissed") !== "true") {
      setTimeout(() => modal.classList.add("show"), 5000);

      const closeModal = () => {
        modal.classList.remove("show");
        sessionStorage.setItem("modalDismissed", "true");
      };

      closeModalBtn.addEventListener("click", closeModal);
      window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
      window.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("show")) closeModal(); });
      setTimeout(() => { if (modal.classList.contains("show")) closeModal(); }, 60000);
    }

    // --------------------
    // 2. TOAST DE APOYO
    // --------------------
    const possibleIds = ["userSupportToast", "userSupportToastAlt", "userSupportToast1"];
    const toast = possibleIds.map(id => document.getElementById(id)).find(el => el);

    if (toast) {
      const closeBtn = toast.querySelector(".toast-close");
      const showTimer = setTimeout(() => toast.style.display = "block", 20000);
      const hideTimer = setTimeout(() => toast.style.display = "none", 80000);

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          toast.style.display = "none";
          clearTimeout(showTimer);
          clearTimeout(hideTimer);
        });
      }
    }

    // --------------------
    // 3. BOTÓN FLOTANTE WHATSAPP
    // --------------------
    const menu = document.getElementById("contact-menu");
    const helpText = document.getElementById("help-text");
    const button = document.getElementById("contact-button");
    const container = document.getElementById("whatsapp-container");
    const closeMenuBtn = document.getElementById("close-menu");

    if (menu && helpText && button && container) {
    // Funciones globales para accesibilidad
    window.showHelpText = function () {
        if (window.innerWidth > 768) {
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
        }
    };

    window.hideHelpText = function () {
        if (window.innerWidth > 768) {
        helpText.style.opacity = "0";
        helpText.style.transform = "translateX(-10px)";
        }
    };

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        setTimeout(() => {
            helpText.style.opacity = "1";
            helpText.style.transform = "translateX(0)";
        }, 300);
        } else {
        menu.classList.add("show-menu");
        helpText.style.opacity = "0";
        helpText.style.transform = "translateX(-10px)";
        }
    }

    // Eventos
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", toggleMenu);
    }
    button.addEventListener("click", toggleMenu);
    button.addEventListener("mouseover", window.showHelpText);
    container.addEventListener("mouseleave", window.hideHelpText);

    // Cerrar si se hace clic fuera
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
        menu.classList.remove("show-menu");
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
        }
    });
    }


    // --------------------
    // 4. NAV PARA PANTALLAS TÁCTILES
    // --------------------
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      const dropdown = document.querySelector(".nav-item.dropdown");
      if (dropdown) {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menuDropdown = dropdown.querySelector(".dropdown-menu");
        if (toggle && menuDropdown) {
          let touchedOnce = false;
          toggle.addEventListener("touchstart", function (e) {
            if (!touchedOnce) {
              e.preventDefault();
              dropdown.classList.add("show");
              menuDropdown.classList.add("show");
              touchedOnce = true;

              const outsideHandler = (ev) => {
                if (!dropdown.contains(ev.target)) {
                  dropdown.classList.remove("show");
                  menuDropdown.classList.remove("show");
                  touchedOnce = false;
                  document.removeEventListener("touchstart", outsideHandler);
                }
              };
              document.addEventListener("touchstart", outsideHandler);
            } else {
              window.location = toggle.href;
            }
          });
        }
      }
    }

    // --------------------
    // 5. EFECTOS Y CAROUSELS
    // --------------------
    if (window.jQuery) {
      (function ($) {

        // Preloader
        $("#preloader").animate({ 'opacity': '0' }, 600, function () {
          setTimeout(() => { $("#preloader").css("visibility", "hidden").fadeOut(); }, 300);
        });

        // Header background al hacer scroll
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();
          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });

        // Owl gallery
        if ($('.owl-gallery').length) {
          $('.owl-gallery').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 3,
            margin: 10,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 3000,
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
          });
        }

        // Gallery carousel
        if ($(".gallery-carousel").length) {
          $(".gallery-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
          });
        }

        // Owl partners
        if ($('.owl-partners').length) {
          $('.owl-partners').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 12,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            responsive: { 0: { items: 1, margin: 6 }, 576: { items: 2, margin: 10 }, 992: { items: 4, margin: 12 } }
          });
        }

        // Modern slider
        if ($(".Modern-Slider").length) {
          $(".Modern-Slider").slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 1500,
            fade: true,
            cssEase: 'ease-in-out',
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            draggable: false,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>'
          });
        }

        // Contador
        $(window).scroll(function () {
          $('.count-digit').each(function () {
            var $this = $(this);
            if ($this.hasClass('counter-loaded')) return;
            if ($this.is(':visible')) {
              $this.addClass('counter-loaded');
              $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () { $this.text(Math.ceil(this.Counter)); }
              });
            }
          });
        });

        // AOS animations
        if (window.AOS) {
          AOS.init({ once: false, offset: 120 });
        }

      })(jQuery);
    }

  });

})();
// --------------------
// 6. PESTAÑAS EN PÁGINA DE SERVICIOS
// --------------------
if (document.querySelectorAll('.services-page-tablink').length > 0) {
  if (window.AOS) {
    AOS.init({ duration: 2600, once: true, easing: 'ease-in-out' });
  }

  document.querySelectorAll('.services-page-tablink').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      // Actualizar pestañas
      document.querySelectorAll('.services-page-tablink').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      // Actualizar contenidos
      document.querySelectorAll('.services-page-tabcontent').forEach(section => {
        section.classList.remove('active');
      });

      // Activar actual
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      const targetSection = document.getElementById(tab);
      if (targetSection) targetSection.classList.add('active');

      if (window.AOS) {
        AOS.refresh();
      }
    });
  });
}

