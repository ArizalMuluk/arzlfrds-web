// Toggle Menu
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

// Function to toggle menu
const toggleMenu = () => {
    navbar.classList.toggle('active');
};

// Function to close menu
const closeMenu = () => {
    navbar.classList.remove('active');
};

// Event listener for menu icon click
menuIcon.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        closeMenu();
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when scrolling
window.addEventListener('scroll', closeMenu);

// Optional: Add scroll to section functionality
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add active class to navbar items on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});