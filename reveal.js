function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');

    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
const animate = ScrollReveal();

animate.reveal('.imgSidebar', {
    duration: 2500,
    origin: 'left',
    distance: '700px',
    reset: 'true'
});

animate.reveal('.contentBx h4,h2.up,.up', {
    duration: 3000,
    origin: 'top',
    distance: '100px',
    reset: 'true'
});
animate.reveal('.contentBx a', {
    duration: 2000,
    origin: 'bottom',
    distance: '60px',
    reset: 'true'
});
animate.reveal('.contentBx .sci', {
    duration: 3000,
    origin: 'bottom',
    distance: '30px',
    reset: 'true'
});
animate.reveal('.toggle', {
    duration: 5000,
    origin: 'top',
    distance: '100px',
});
animate.reveal('.title', {
    duration: 1500,
    scale: '0.7',
    reset: 'true'
});
animate.reveal('.content .textBx', {
    duration: 2000,
    origin: 'bottom',
    distance: '80px',
    reset: 'true'
});
animate.reveal('.content .imgBx.x', {
    duration: 4000,
    origin: 'right',
    distance: '60px',
    reset: 'true',
});
animate.reveal('.serviceBx', {
    interval: 400,
    duration: 1000,
    origin: 'top',
    distance: '40px',
    reset: 'true',
});
animate.reveal('.workBx', {
    interval: 400,
    duration: 1500,
    origin: 'top',
    distance: '40px',
    reset: 'true',
});
animate.reveal('.row', {
    interval: 400,
    duration: 1500,
    origin: 'top',
    distance: '40px',
    reset: 'true',
});
animate.reveal('.kotak .kanan', {
    duration: 3000,
    origin: 'bottom',
    distance: '60px',
    reset: 'true'
});