document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelector(".modal-btn");
  const closeBtn = document.querySelector(".close-btn");
  const modalOverlay = document.querySelector(".modal-overlay");

  modalBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
});
