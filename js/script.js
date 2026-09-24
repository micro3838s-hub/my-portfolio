/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});


/* Close menu after clicking navigation */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
  });
});


/* =========================
   WORK FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    /* active button */

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");


    /* filter cards */

    workCards.forEach(card => {

      const category = card.dataset.category;

      if (filter === "all" || category === filter) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedSections = document.querySelectorAll(
  ".section, .contact"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.1
  }
);


animatedSections.forEach(section => {
  observer.observe(section);
});


/* =========================
   HEADER BACKGROUND
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    header.style.boxShadow =
      "0 5px 25px rgba(22, 74, 112, 0.08)";

  } else {

    header.style.boxShadow = "none";

  }

});