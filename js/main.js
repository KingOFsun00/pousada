/**
 * main.js - JavaScript principal do site
 * Contém funcionalidades globais usadas em todas as páginas
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Alternador de Tema Dark/Light
    const setupThemeToggle = () => {
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        const isDarkMode = localStorage.getItem('theme') === 'dark';

        // Aplica o tema salvo no localStorage
        if (isDarkMode) {
            htmlElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
            if (themeToggle) {
                themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            }
        }

        // Configura o clique no botão de tema
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme');
                
                if (currentTheme === 'light') {
                    // Muda para dark
                    htmlElement.setAttribute('data-theme', 'dark');
                    document.body.classList.add('dark-theme');
                    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    // Muda para light
                    htmlElement.setAttribute('data-theme', 'light');
                    document.body.classList.remove('dark-theme');
                    themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });
        }
    };

    // 2. Navegação fixa com efeito de scroll
    const setupNavbar = () => {
        const nav = document.getElementById('mainNav');
        
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
        }
    };

    // 3. Botão "Voltar ao Topo"
    const setupBackToTop = () => {
        const backToTop = document.getElementById('backToTop');
        
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('active');
                } else {
                    backToTop.classList.remove('active');
                }
            });

            backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };

    // 4. Ativar links ativos na navegação
    const setActiveNavLink = () => {
        const navLinks = document.querySelectorAll('#mainNav a');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // 5. Inicializar todas as funcionalidades
    const init = () => {
        setupThemeToggle();
        setupNavbar();
        setupBackToTop();
        setActiveNavLink();
    };

    // Inicia tudo
    init();
});