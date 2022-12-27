// NavBar
const home = document.querySelector(".home");
const about = document.querySelector(".about");

home.addEventListener("click", function() {
  window.location.href = "../index.html";
});
about.addEventListener("click", function() {
  window.location.href = "../about.html";
});
