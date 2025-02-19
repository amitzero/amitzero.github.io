document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Set default mode to dark
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    const typingEffect = document.querySelector('.typing-effect');
    const roles = ["Software Architect", "System Designer", "Developer", "IoT Engineer", "Cybersecurity Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingEffect.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingEffect.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 1000);
        }
    }

    type();

    const form = document.querySelector('form');
    const sendButton = form.querySelector('button[type="submit"]');
    const requiredFields = form.querySelectorAll('[required]');

    form.addEventListener('submit', (event) => {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });

        if (!allFilled) {
            event.preventDefault();
        }
    });
});
