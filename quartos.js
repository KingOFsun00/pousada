// quartos.js - JavaScript para a página de quartos

document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicialização dos carrosséis de imagens
    const initSwipers = () => {
        // Carrossel do Chalé da Mata
        new Swiper('.swiper-chale-mata', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        });

        // Carrossel do Chalé de Adobe
        new Swiper('.swiper-chale-adobe', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        });

        // Carrossel da Suíte Interna
        new Swiper('.swiper-suite-interna', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        });
    };

    // 2. Efeito de hover nos cards de quartos
    const setupRoomHover = () => {
        const roomSections = document.querySelectorAll('.room-section');
        
        roomSections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'translateY(-10px)';
                section.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            });
            
            section.addEventListener('mouseleave', () => {
                section.style.transform = '';
                section.style.boxShadow = '';
            });
        });
    };

    // 3. Botão de reserva com efeito
    const setupReserveButtons = () => {
        const reserveButtons = document.querySelectorAll('.reserve-button');
        
        reserveButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-3px)';
                button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
                button.style.boxShadow = '';
            });
        });
    };

    // 4. Botão "Voltar ao Topo"
    const setupBackToTop = () => {
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // 5. Alternador de Tema
    const setupThemeToggle = () => {
        const themeToggle = document.getElementById('themeToggle');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    };

    // 6. Navegação fixa com efeito de scroll
    const setupNavbar = () => {
        const nav = document.getElementById('mainNav');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    };

    // Inicializar todas as funcionalidades
    initSwipers();
    setupRoomHover();
    setupReserveButtons();
    setupBackToTop();
    setupThemeToggle();
    setupNavbar();
});