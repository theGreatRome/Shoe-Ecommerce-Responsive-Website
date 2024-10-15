let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelector('.spotlight-slide');
    const totalSlides = document.querySelectorAll('.shoe').length;
    
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    
    const offset = -currentSlide * 100 / totalSlides;
    slides.style.transform = `translateX(${offset}%)`;
}
