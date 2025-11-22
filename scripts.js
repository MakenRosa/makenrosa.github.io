const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const progressBar = document.querySelector('.scroll-progress__bar');

menuToggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
});

menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            menu.classList.remove('open');
        }
    });
});

const updateProgress = () => {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
};

document.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
window.addEventListener('load', updateProgress);
