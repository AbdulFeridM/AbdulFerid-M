// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 2)) {
            section.classList.add('active');
        }
    });
});

// Image Animation on Load and Scroll
function animateOnScroll() {
    const profileImage = document.querySelector('.profile-image');
    if (!profileImage) return; // Guard clause if image not found
    
    const imagePosition = profileImage.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (imagePosition < screenPosition) {
        profileImage.style.animation = 'profileFadeIn 1s ease-out forwards';
    }
}

// Initial load animation
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.opacity = '0';
        setTimeout(() => {
            profileImage.style.animation = 'profileFadeIn 1.5s ease-out forwards';
        }, 300);
    }
});

// Scroll Animation Handler
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    const staggerElements = document.querySelectorAll('.stagger-fade');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });

    staggerElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('active');
            }, 200 * index);
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);