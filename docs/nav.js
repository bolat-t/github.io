// nav.js
function initNav() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  const bars = menuBtn.querySelectorAll(".bar");

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
  // Get current page, handling both root and nested paths
  let currentPage = location.pathname.split("/").pop() || "index.html";
  
  // If we're at the root with no filename, it's index.html
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  // Handle project pages - they should not highlight any main nav item
  const isProjectPage = location.pathname.includes("/projects/");

  // Desktop nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    
    if (!isProjectPage && linkPage === currentPage) {
      link.classList.add("text-teal-400", "font-medium");
      link.classList.remove("text-neutral-400");
    } else {
      link.classList.remove("text-teal-400", "font-medium");
      link.classList.add("text-neutral-400");
    }
  });

  // Mobile nav links - with inline underline instead of full-width
  document.querySelectorAll(".nav-link-mobile").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    
    if (!isProjectPage && linkPage === currentPage) {
      link.classList.add(
        "text-teal-400",
        "font-medium",
        "inline-block",
        "border-b-2",
        "border-teal-400",
        "pb-1"
      );
      link.classList.remove("text-neutral-300");
    } else {
      link.classList.remove(
        "text-teal-400",
        "font-medium",
        "border-b-2",
        "border-teal-400",
        "pb-1"
      );
      link.classList.add("text-neutral-300");
    }
  });
}