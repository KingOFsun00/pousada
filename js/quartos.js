document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicializa os Swipers com observer
    const initSwipers = () => {
        const swiperOptions = {
            loop: true,
            autoplay: { delay: 5000 },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            keyboard: true,
            observer: true,  // Importante!
            observeParents: true,  // Importante!
        };

        new Swiper('.swiper-chale-mata', swiperOptions);
        new Swiper('.swiper-chale-adobe', swiperOptions);
        new Swiper('.swiper-suite-interna', swiperOptions);
    };

    // 2. Garante que o Swiper só inicia após o DOM estar pronto
    setTimeout(initSwipers, 100);
});