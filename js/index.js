const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalItems = carousel.children.length;
const itemsPerView = 4; // Cambia esto si quieres mostrar más o menos productos
let currentIndex = 0;

function updateCarousel() {
    const translateXValue = (currentIndex * 100) / itemsPerView;
    carousel.style.transform = `translateX(-${translateXValue}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - itemsPerView;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - itemsPerView) ? currentIndex + 1 : 0;
    updateCarousel();
});
