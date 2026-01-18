// nav.js
function initNav() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  const bars = menuBtn.querySelectorAll(".bar");
  const allLinks = document.querySelectorAll("#nav-placeholder a");

  let open = false;

  // ---------- Mobile toggle ----------
  menuBtn.addEventListener("click", () => {
    open = !open;
    mobileMenu.style.maxHeight = open
      ? mobileMenu.scrollHeight + "px"
      : "0px";

    bars[0].style.transform = open
      ? "rotate(45deg) translate(5px, 5px)"
      : "";
    bars[1].style.opacity = open ? "0" : "1";
    bars[2].style.transform = open
      ? "rotate(-45deg) translate(5px, -5px)"
      : "";
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      open = false;
      mobileMenu.style.maxHeight = "0px";
      bars[0].style.transform = "";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "";
    });
  });

  // ---------- Active link highlighting ----------
  const current = location.pathname
    .split("/")
    .pop() || "index.html";

  document
    .querySelectorAll("#nav-placeholder a")
    .forEach(link => {
      const linkPage = link
        .getAttribute("href")
        .split("/")
        .pop();

      if (linkPage === current) {
        link.classList.add(
          "text-teal-400",
          "relative",
          "after:absolute",
          "after:-bottom-1",
          "after:left-0",
          "after:w-full",
          "after:h-[2px]",
          "after:bg-teal-400"
        );

      }
    });
    
}
