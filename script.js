let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a cada 3 segundos
}

function prevSlide() {
    let slides = document.getElementsByClassName("carousel-item");
    slideIndex = (slideIndex <= 1) ? slides.length : slideIndex - 1;
    showSlides();
}

function nextSlide() {
    let slides = document.getElementsByClassName("carousel-item");
    slideIndex = (slideIndex >= slides.length) ? 1 : slideIndex + 1;
    showSlides();
}
