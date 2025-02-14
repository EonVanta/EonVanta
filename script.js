function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        navLinks.style.opacity = "0";
        setTimeout(() => {
            navLinks.style.opacity = "1";
        }, 100);
    }
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
