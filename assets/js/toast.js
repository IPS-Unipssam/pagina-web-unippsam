document.addEventListener("DOMContentLoaded", function () {
  const possibleIds = ["userSupportToast", "userSupportToastAlt", "userSupportToast1"];
  let toast = null;

  for (let id of possibleIds) {
    const el = document.getElementById(id);
    if (el) {
      toast = el;
      break;
    }
  }

  if (!toast) return; // No hay ningún toast presente

  const closeBtn = toast.querySelector(".toast-close");
   // Mostrar el toast después de 20 segundos
  setTimeout(() => {
    toast.style.display = "block";
  }, 20000);

  setTimeout(() => {
    toast.style.display = "none";
  }, 80000);    // Ocultar automáticamente después de 1 minuto de visibilidad (total 80 segundos)

    // Permitir cierre manual

  closeBtn.addEventListener("click", () => {
    toast.style.display = "none";
  });
});
