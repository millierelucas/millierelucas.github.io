// Bascule français / anglais
const html = document.documentElement;
const langBtn = document.getElementById('lang-toggle');

langBtn.addEventListener('click', () => {
    const next = html.dataset.lang === 'fr' ? 'en' : 'fr';
    html.dataset.lang = next;
    html.lang = next;
});

// Changement de CV (français / anglais)
const cvFrame = document.getElementById('cv-frame');
const cvDownload = document.getElementById('cv-download');
const cvButtons = document.querySelectorAll('.cv-switch');

cvButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const file = btn.dataset.cv;
        cvFrame.src = file;
        cvDownload.href = file;
        cvButtons.forEach(b => b.classList.toggle('active', b === btn));
    });
});

// Apparition des sections au défilement
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
