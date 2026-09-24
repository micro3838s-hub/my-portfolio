const galleryItems = document.querySelectorAll(".gallery-item");

const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");


galleryItems.forEach(item => {

  item.addEventListener("click", () => {

    const image = item.dataset.image;
    const title = item.dataset.title;

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});