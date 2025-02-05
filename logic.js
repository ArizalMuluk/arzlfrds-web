document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Menambahkan event listener untuk menu icon
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });

        // Menutup menu saat link di klik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    } else {
        console.error('Menu icon or navbar element not found!');
    }

    // Scroll sections
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
                });
            } 
        });

        // Optional: Menutup menu saat scroll
        menuIcon?.classList.remove('bx-x');
        navbar?.classList.remove('active');
    }

    // Typed.js animation
    // const typed = new Typed('.text-animation span', {
    //     strings: ['AI Engineer', 'ML Engineer', 'Data Analyst', 'Software Developer'],
    //     typeSpeed: 100,
    //     backSpeed: 50,
    //     backDelay: 1000,
    //     loop: true
    // });
});

// function sendWhatsApp(event) {
//     event.preventDefault();

//     const fullName = document.getElementById('fullName').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     const text = `*New Contact Form Submission*
// Name: ${fullName}
// Email: ${email}
// Phone: ${phone}
// Subject: ${subject}

// Message:
// ${message}`;

//     const phoneNumber = CONFIG.whatsappNumber;

//     const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;

//     window.open(whatsappURL, '_blank');

//     document.getElementById('whatsappForm').reset();
// }

// // Pastikan form ada sebelum menambahkan event listener
// const whatsappForm = document.getElementById('whatsappForm');
// if (whatsappForm) {
//     whatsappForm.addEventListener('submit', sendWhatsApp);
// }