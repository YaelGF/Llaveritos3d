const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(38, 110, 196, 0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});