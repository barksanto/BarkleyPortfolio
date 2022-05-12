const navList = document.getElementById("navbarNavAltMarkup");
const body = document.getElementById("top");

const navItems = document.querySelectorAll(".navbar-nav > .nav-item");
navItems.forEach((navitem) => {
  navitem.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});

body.addEventListener("click", () => {
  navList.classList.remove("show");
});
