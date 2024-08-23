const navBar = document.querySelector("nav");
const burgerBar = document.querySelector(".burger-bar");
const listNavMobile = document.querySelector(".list-nav-mobile");
// const buttonToTop = document.querySelector(".btn-to-top");

let openBurgerBar = false; // false = tidak dilihat; true = dilihat
burgerBar.addEventListener("click", function () {
  openBurgerBar = !openBurgerBar;
  if (openBurgerBar) {
    navBar.style.backgroundColor = "rgba(156, 168, 158, 100)";
    navBar.style.color = "#0b2b26";
    listNavMobile.style.display = "block"; // display: block;
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
    listNavMobile.style.display = "none"; // display: none;
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 667) {
    navBar.style.backgroundColor = "rgba(156, 168, 158, 100)";
    navBar.style.color = "#0b2b26";
    navBar.style.transition = "all 0.5s ease-in-out";
    navBar.style.padding = "9px 25px";
    listNavMobile.style.top = "54px";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
    navBar.style.padding = "20px 25px 20px";
    listNavMobile.style.top = "80px";
  }
});

const handleContentClick = (value) => {
  const component = document.getElementById(`content${value}`);
  component.scrollIntoView({
    behavior: "smooth",
  });
  listNavMobile.style.display = "none";
};

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

scroll().then(
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  })
);

const typed = new Typed(".home-span-text", {
  strings: [
    "Student of Hasanuddin Univ",
    "FrontEnd Developer Novice",
    "Emerging Web Develope",
  ],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});

// // Tampilkan buttonToTop jika scrollY >= 500
// document.addEventListener("scroll", () => {
//   if (window.scrollY >= 500) {
//     buttonToTop.style.opacity = 1;
//   } else {
//     buttonToTop.style.opacity = 0;
//   }
// });
