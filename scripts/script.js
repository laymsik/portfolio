const animateSections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

animateSections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const text = "Artem Aksenov";
    let i = 0;

    typingText.style.animation = 'none';
    typingText.style.borderRight = 'none';
    typingText.textContent = '';

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100 + Math.random() * 100);
        } else {
            typingText.style.borderRight = '3px solid var(--accent-light)';
            typingText.style.animation = 'blink-caret .75s step-end infinite';
        }
    }

    setTimeout(typeWriter, 1000);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});