document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    const docElement = document.documentElement;
    const sunIcon = '<i class="fas fa-sun"></i>';
    const moonIcon = '<i class="fas fa-moon"></i>';

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkMode)) {
        docElement.setAttribute('data-theme', 'dark');
        themeSwitcher.innerHTML = sunIcon;
    } else {
        docElement.setAttribute('data-theme', 'light');
        themeSwitcher.innerHTML = moonIcon;
    }

    themeSwitcher.addEventListener('click', () => {
        if (docElement.getAttribute('data-theme') === 'dark') {
            docElement.setAttribute('data-theme', 'light');
            themeSwitcher.innerHTML = moonIcon;
            localStorage.setItem('theme', 'light');
        } else {
            docElement.setAttribute('data-theme', 'dark');
            themeSwitcher.innerHTML = sunIcon;
            localStorage.setItem('theme', 'dark');
        }
    });

    // Typing Effect
    const typingEffect = document.querySelector('.typing-effect');
    if (typingEffect) {
        const textArray = ["Software Architect", "System Designer", "Developer"];
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typingEffect.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingEffect.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, 1000);
            }
        }
        typingEffect.textContent = "";
        type();
    }

    // Scroll Animations
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });

    // Responsive Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Skills Accordion
    const skillCategoryTitles = document.querySelectorAll('.skill-category-title');
    skillCategoryTitles.forEach(title => {
        title.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const skillsGrid = title.nextElementSibling;
                skillsGrid.classList.toggle('hidden');
            }
        });
    });
});
