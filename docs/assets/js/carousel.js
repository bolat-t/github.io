// Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById("carousel");
    if (!carousel) return;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector("button[onclick='prevSlide()']");
    const nextBtn = document.querySelector("button[onclick='nextSlide()']");

    if (slides.length === 0) return;

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("visible-slide");
                slide.classList.remove("hidden-slide");
            } else {
                slide.classList.remove("visible-slide");
                slide.classList.add("hidden-slide");
            }
        });

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("bg-teal-400");
                dot.classList.remove("bg-neutral-600");
            } else {
                dot.classList.remove("bg-teal-400");
                dot.classList.add("bg-neutral-600");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Bind events if buttons exist (removing inline onclicks from HTML)
    if (prevBtn) prevBtn.onclick = prevSlide;
    if (nextBtn) nextBtn.onclick = nextSlide;

    // Initial show
    showSlide(currentSlide);
});
