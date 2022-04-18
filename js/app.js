const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const copyRightYear = document.querySelector(".year");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("toggle");
  mobileNav.classList.toggle("active");
});

mobileNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("navLink")) {
    if (e.target.getAttribute("href").substr(0, 1) == "#") {
      mobileNav.classList.toggle("active");
      menuIcon.classList.toggle("toggle");
    }
  }
});

let year = new Date().getFullYear();
copyRightYear.innerHTML = year;
