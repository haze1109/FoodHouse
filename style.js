const navToggle = document.getElementById("nav-toggle");
const navbarNav = document.getElementById("navbarNav");

navToggle.addEventListener("click", function() {
  if (navbarNav.classList.contains("show")) {
    navToggle.setAttribute("aria-expanded", "false");
    navbarNav.classList.remove("show");
    navToggle.classList.add("collapsed");
  } else {
    navToggle.setAttribute("aria-expanded", "true");
    navbarNav.classList.add("show");
    navToggle.classList.remove("collapsed");
    navToggle.addEventListener("click", hideNavToggle);
  }
});

function hideNavToggle() {
  navToggle.setAttribute("aria-expanded", "false");
  navbarNav.classList.remove("show");
  navToggle.classList.add("collapsed");
  navToggle.removeEventListener("click", hideNavToggle);
}