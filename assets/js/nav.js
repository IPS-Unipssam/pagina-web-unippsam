
  document.addEventListener("DOMContentLoaded", function () {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      const dropdown = document.querySelector('.nav-item.dropdown');
      const toggle = dropdown.querySelector('.dropdown-toggle');

      let touchedOnce = false;

      toggle.addEventListener("touchstart", function (e) {
        if (!touchedOnce) {
          e.preventDefault(); // Bloquea navegación al primer toque
          dropdown.classList.add("show");
          const menu = dropdown.querySelector(".dropdown-menu");
          menu.classList.add("show");
          touchedOnce = true;

          // Cierra si se toca fuera
          document.addEventListener("touchstart", function handler(ev) {
            if (!dropdown.contains(ev.target)) {
              dropdown.classList.remove("show");
              menu.classList.remove("show");
              touchedOnce = false;
              document.removeEventListener("touchstart", handler);
            }
          });
        } else {
          // Segundo toque: navega normalmente
          window.location = toggle.href;
        }
      });
    }
  });
