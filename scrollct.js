// this script is for   when a button is clicked then  take us to section two
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("goToSection2");
  const section2 = document.getElementById("section2");

  button.addEventListener("click", () => {
    section2.scrollIntoView({ behavior: "smooth" });
  });
});
