
/*=========== Typed Js ============*/
const typed = new Typed('.multiple-text', {
  strings: ['Fronted Developer', 'Backend Developer', 'Web Designer', 'UI/UX Designer'],
  typeSpeed: 70,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});
// Open Modal
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = imageSrc;
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}