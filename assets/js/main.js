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

// PREP
// If div by 3, print fizz, if by 5 print buzz, if by 3&5 fizzbuzz
// A function takes a number
// Return 1 to some value
function fizzbuzz(num) {
  // second expression in for loop 
  // = "while i is less than or equal to number argument"
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz(3);
// fizzbuzz(5);
fizzbuzz(15);
// fizzbuzz(99);

function go(number) {
  for (let numberRange = 1; numberRange <= number; numberRange++) {
    if (numberRange % 3 === 0 && numberRange % 5 === 0) {
      console.log("fizzBuzz");
    } else if (numberRange % 3 === 0) {
      console.log("fizz");
    } else if (numberRange % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(numberRange);
    }
  }
}
// go(3);
// go(5);
// go(15);
// go(2);
