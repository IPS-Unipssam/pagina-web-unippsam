
  document.addEventListener("DOMContentLoaded", function () {
    const toast = document.getElementById("userSupportToast");
    const closeBtn = toast.querySelector(".toast-close");

    // Mostrar el toast después de 15 segundos
    setTimeout(() => {
      toast.style.display = "block";
    }, 15000); // 15 segundos de espera

    // Cerrar automáticamente después de 60 segundos desde que se muestra
    setTimeout(() => {
      toast.style.display = "none";
    }, 75000); // 15s espera + 60s visibilidad

    // Permitir cierre manual
    closeBtn.addEventListener("click", () => {
      toast.style.display = "none";
    });
  });

//   otro acerca de nosotros

 document.addEventListener("DOMContentLoaded", function () {
    const toast = document.getElementById("userSupportToastAlt");
    const closeBtn = toast.querySelector(".toast-close");

    // Mostrar el toast después de 15 segundos
    setTimeout(() => {
      toast.style.display = "block";
    }, 15000); // 15 segundos de espera

    // Cerrar automáticamente después de 60 segundos desde que se muestra
    setTimeout(() => {
      toast.style.display = "none";
    }, 75000); // 15s espera + 60s visibilidad

    // Permitir cierre manual
    closeBtn.addEventListener("click", () => {
      toast.style.display = "none";
    });
  });


//   otro nuestras sedes

  document.addEventListener("DOMContentLoaded", function () {
    const toast = document.getElementById("userSupportToast1");
    const closeBtn = toast.querySelector(".toast-close");

    // Mostrar el toast después de 15 segundos
    setTimeout(() => {
      toast.style.display = "block";
    }, 15000); // 15 segundos de espera

    // Cerrar automáticamente después de 60 segundos desde que se muestra
    setTimeout(() => {
      toast.style.display = "none";
    }, 75000); // 15s espera + 60s visibilidad

    // Permitir cierre manual
    closeBtn.addEventListener("click", () => {
      toast.style.display = "none";
    });
  });