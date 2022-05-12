const navList = document.getElementById("navbarNavAltMarkup");

const navItems = document.querySelectorAll(".navbar-nav > .nav-item");
navItems.forEach((navitem) => {
  navitem.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});
