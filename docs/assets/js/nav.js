
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    const path = window.location.pathname;
    const isProject = path.includes('/projects/') || path.includes('\\projects\\');
    const navUrl = isProject ? '../nav.html' : 'nav.html';

    fetch(navUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        navPlaceholder.innerHTML = data;
        initNav();
        highlightActiveLink();
      })
      .catch(err => console.error('Failed to load nav:', err));
  }
});

function initNav() {
  const mobileMenuButton = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      // Toggle the max-height class to animate opening/closing
      if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0');
        mobileMenu.classList.add('max-h-screen');
      } else {
        mobileMenu.classList.add('max-h-0');
        mobileMenu.classList.remove('max-h-screen');
      }
    });
  }
}

function highlightActiveLink() {
  const current = location.pathname.split("/").pop() || 'index.html';
  const cleanCurrent = current.split('#')[0].split('?')[0];

  document.querySelectorAll('#nav-placeholder a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;

    if (href === cleanCurrent || (cleanCurrent === 'index.html' && href === './')) {
      a.classList.add('text-teal-400', 'font-medium');
      a.classList.remove('text-neutral-400');
    } else {
      a.classList.remove('text-teal-400', 'font-medium');
    }
  });
}
