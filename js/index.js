import "./macy";

//scroll

const scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {
  window.scroll({
    behavior: "smooth",
    top: window.innerHeight,
    left: 0
  });
});
//scroll

//menu
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active-btn");
});
//menu
