// section scroll and menu
window.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.getElementById("heroImage");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const menuLinks = document.querySelectorAll(".menu-list a");

  // Lock scroll initially
  document.body.classList.add("no-scroll");

  // Begin transition after delay
  setTimeout(() => {
    document.body.classList.add("transitioned");

    const unlockScroll = () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "auto";
    };

    // If hero image exists, wait for its transition to end before unlocking scroll
    if (heroImage) {
      heroImage.addEventListener("transitionend", unlockScroll, { once: true });

      setTimeout(unlockScroll, 1500);
    } else {
      unlockScroll();
    }
  }, 2000);

  // Mobile Menu: Open
  const showMenu = () => {
    mobileMenu.style.display = "flex";
    document.body.classList.add("no-scroll");
  };

  // Mobile Menu: Close
  const hideMenu = () => {
    mobileMenu.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  menuToggle?.addEventListener("click", showMenu);
  closeMenu?.addEventListener("click", hideMenu);
  menuLinks.forEach((link) => link.addEventListener("click", hideMenu));
});
