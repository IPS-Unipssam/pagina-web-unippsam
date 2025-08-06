
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
  

    //   efecto whassap
  // Mostrar/ocultar menú al hacer clic en el botón
  function toggleMenu() {
    const menu = document.getElementById("contact-menu");
    const helpText = document.getElementById("help-text");

    if (!menu || !helpText) return;

    const isVisible = menu.classList.contains("show-menu");

    if (isVisible) {
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

  function showHelpText() {
    const helpText = document.getElementById("help-text");
    if (helpText) {
      helpText.style.opacity = "1";
      helpText.style.transform = "translateX(0)";
    }
  }

  function hideHelpText() {
    const helpText = document.getElementById("help-text");
    if (helpText) {
      helpText.style.opacity = "0";
      helpText.style.transform = "translateX(-10px)";
    }
  }

  // Cierra el menú si haces clic fuera
  document.addEventListener("click", (e) => {
    const container = document.getElementById("whatsapp-container");
    const menu = document.getElementById("contact-menu");

    // Si haces clic fuera del contenedor y el menú está abierto, lo cierra
    if (container && menu && !container.contains(e.target)) {
      menu.classList.remove("show-menu");

      const helpText = document.getElementById("help-text");
      if (helpText) {
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
      }
    }
  });


    // efecto modal

    function toggleMenu() {
        const menu = document.getElementById("contact-menu");
        const helpText = document.getElementById("help-text");
        
        if (menu.classList.contains("show-menu")) {
            menu.classList.remove("show-menu");
            setTimeout(() => helpText.style.opacity = "1", 300);
        } else {
            menu.classList.add("show-menu");
            helpText.style.opacity = "0";
        }
    }

    function showHelpText() {
        const helpText = document.getElementById("help-text");
        helpText.style.opacity = "1";
        helpText.style.transform = "translateX(0)";
    }

    function hideHelpText() {
        const helpText = document.getElementById("help-text");
        helpText.style.opacity = "0";
        helpText.style.transform = "translateX(-10px)";
    }

    // efecto modal finaciero
    
