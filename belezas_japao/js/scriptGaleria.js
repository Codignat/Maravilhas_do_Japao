
const carousel = document.querySelector('.carousel-galeria');
const items = document.querySelectorAll('.carousel-item-galeria');
const prevBtn = document.querySelector('.prev-btn-galeria');
const nextBtn = document.querySelector('.next-btn-galeria');

let index = 0;

const showCarousel = () => {
    const size = items[0].clientWidth;
    carousel.style.transform = `translateX(${-index * size}px)`;
};

const nextSlide = () => {
    index = (index + 1) % items.length;
    showCarousel();
};

const prevSlide = () => {
    index = (index - 1 + items.length) % items.length;
    showCarousel();
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostrar a posição inicial
showCarousel();

window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("rolagem", window.scrollY > 100);
});