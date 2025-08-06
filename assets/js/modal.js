document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModal");

  // Si el modal no existe o ya se cerró en esta sesión, no hacer nada
  if (!modal || !closeBtn || sessionStorage.getItem("modalDismissed") === "true") return;

  // Mostrar el modal automáticamente después de un pequeño delay
  setTimeout(() => {
    modal.classList.add("show");
  }, 2000); // aparece tras 2.5 segundos

  // Función para cerrar el modal y guardar que fue cerrado
  const closeModal = () => {
    modal.classList.remove("show");
    sessionStorage.setItem("modalDismissed", "true");
  };

  // Cerrar al hacer clic en la X
  closeBtn.addEventListener("click", closeModal);

  // Cerrar al hacer clic fuera del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar al presionar la tecla ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // Cierre automático si el usuario no interactúa
  setTimeout(() => {
    if (modal.classList.contains("show")) {
      closeModal();
    }
  }, 60000); // 60 segundos
});
