// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-white');
        document.querySelector('.navbar').classList.remove('bg-light');
    } else {
        document.querySelector('.navbar').classList.add('bg-light');
        document.querySelector('.navbar').classList.remove('bg-white');
    }
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add animation to services cards on scroll
const animateOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;
        
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Initialize card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-in-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check for visible cards
});

// Mobile menu handling
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        navbarCollapse.classList.remove('show');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlideIndex = 0;

    // Function to change slides
    const changeSlide = () => {
        // Hide all slides
        slides.forEach((slide, index) => {
            slide.style.opacity = '0';
            slide.style.transition = 'opacity 1s ease-in-out';
        });

        // Show the current slide
        slides[currentSlideIndex].style.opacity = '1';

        // Move to the next slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the first slide
    };

    // Initialize slides
    slides.forEach(slide => {
        slide.style.position = 'absolute';
        slide.style.top = '0';
        slide.style.left = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = '0'; // Start hidden
    });

    // Show the first slide
    slides[0].style.opacity = '1';

    // Set interval for sliding
    setInterval(changeSlide, 5000); // Change slide every 5 seconds
});
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    changeSlide();
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    changeSlide();
}
