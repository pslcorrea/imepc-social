const btnMenu = document.querySelector("#menu-mobile ion-icon");
const menuMobile = document.querySelector(".menu-mobile");
btnMenu.addEventListener("click", function () {
 menuMobile.classList.toggle("menu-mobile-open");
});
// menuBar.addEventListener("click", (e) => {
//  e.preventDefault();
//  let menuMobile = document.querySelector(".menu-mobile ul");
//  if (menuMobile.classList.contains("show-menu")) {
//   menuMobile.classList.remove("show-menu");
//  } else {
//   menuMobile.classList.add("show-menu");
//  }
// });
