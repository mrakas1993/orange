const openModalBtn3 = document.querySelector(".howtodo2");
const openModalBtn2 = document.querySelector(".howtodo");
const closeModalBtn = document.querySelector(".butn-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

  // close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn2.addEventListener("click", openModal);
openModalBtn3.addEventListener("click", openModal);
