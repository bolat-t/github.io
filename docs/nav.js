// nav.js
function initNav() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const bars = menuBtn.querySelectorAll(".bar");
  const links = mobileMenu.querySelectorAll("a");

  if (!menuBtn || !mobileMenu) return; // safety check

  let open = false;

  menuBtn.addEventListener("click", () => {
    open = !open;
    mobileMenu.style.maxHeight = open ? mobileMenu.scrollHeight + "px" : "0px";
    bars[0].style.transform = open ? "rotate(45deg) translate(5px, 5px)" : "";
    bars[1].style.opacity = open ? "0" : "1";
    bars[2].style.transform = open ? "rotate(-45deg) translate(5px, -5px)" : "";
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      open = false;
      mobileMenu.style.maxHeight = "0px";
      bars[0].style.transform = "";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "";
    });
  });
}
