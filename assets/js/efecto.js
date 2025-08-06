
      document.addEventListener("DOMContentLoaded", function() {
          var dropdown = document.getElementById("navbarDropdown");
          dropdown.addEventListener("click", function(event) {
              if (window.innerWidth >= 992) { // Si es pantalla grande (desktop)
                  window.location.href = this.href;
              } else { // Si es pantalla pequeña (móvil)
                  event.preventDefault(); // Prevenir la redirección
                  var dropdownMenu = this.nextElementSibling;
                  if (dropdownMenu.style.display === "block") {
                      dropdownMenu.style.display = "none";
                  } else {
                      dropdownMenu.style.display = "block";
                  }
              }
          });
      });
  
      // efecto whsapp
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("contact-menu");
    const helpText = document.getElementById("help-text");
    const button = document.getElementById("contact-button");
    const container = document.getElementById("whatsapp-container");
    const closeMenuBtn = document.getElementById("close-menu");

    // Alternar el menú al hacer clic en el botón
    function toggleMenu(e) {
      e.stopPropagation(); // ✅ Detiene la propagación para evitar que lo cierre de inmediato

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

    // Mostrar texto de ayuda solo en PC al pasar el mouse
    function showHelpText() {
      if (window.innerWidth > 768) {
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
      }
    }

    function hideHelpText() {
      if (window.innerWidth > 768) {
        helpText.style.opacity = "0";
        helpText.style.transform = "translateX(-10px)";
      }
    }


if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Evita que el evento cierre y reabra
    menu.classList.remove("show-menu");

    // Mostrar el texto de ayuda nuevamente
    helpText.style.opacity = "1";
    helpText.style.transform = "translateX(0)";
  });
}


    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", function (e) {
      if (!container.contains(e.target)) {
        menu.classList.remove("show-menu");
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
      }
    });

    // Asignar eventos
    button.addEventListener("click", toggleMenu);
    button.addEventListener("mouseover", showHelpText);
    container.addEventListener("mouseleave", hideHelpText);
  });

