document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL SECTIONS ACTIVE LINK ---
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.navbar a[href*=' + sectionId + ']');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    // --- STICKY HEADER ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });


    // --- TYPED.JS FOR TYPING ANIMATION ---
    // Make sure you have included the Typed.js library in your HTML
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', 'YouTuber', 'Blogger'], // Customize your roles here
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error('Typed.js library not found. Please check the script link in your HTML.');
    }

});