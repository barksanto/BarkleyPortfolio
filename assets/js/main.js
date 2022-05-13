const navList = document.getElementById("navbarNavAltMarkup");
const body = document.getElementById("top");
const navItems = document.querySelectorAll(".navbar-nav > .nav-item");

function closeMenu() {
  navList.classList.remove("show");
  navList.classList.add("collapse");
}

navItems.forEach((navitem) => {
  navitem.addEventListener("click", () => {
    closeMenu();
  });
});

// body.addEventListener("click", () => {
//   closeMenu();
// });

// const button = document.querySelector("nav > button");
// button.addEventListener("click", () => {
//   closeMenu();
// });

