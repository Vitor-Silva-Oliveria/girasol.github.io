let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function showSlides(index) {
    let slides = document.querySelectorAll('.carousel-images img');
    let dots = document.querySelectorAll('.dot');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    }
    if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.className = i === currentSlideIndex ? 'dot active' : 'dot';
    });
}

function moveSlide(step) {
    currentSlideIndex += step;
    showSlides(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlides(currentSlideIndex);
}
