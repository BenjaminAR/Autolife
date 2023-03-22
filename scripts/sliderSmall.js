const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const intervalTime = 4000; // intervalo de tiempo en milisegundos

function showSlide(index) {
    if (index < 0 || index >= slides.length) {
        return;
    }
    slides[currentIndex].style.display = 'none';
    slides[index].style.display = 'block';
    currentIndex = index;
}

function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

// Agregar temporizador automático
let slideTimer = setInterval(nextSlide, intervalTime);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Detener el temporizador automático cuando el mouse está sobre el carrusel
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});

// Reanudar el temporizador automático cuando el mouse sale del carrusel
carouselContainer.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, intervalTime);
});

showSlide(currentIndex);