document.addEventListener('DOMContentLoaded', function() { //implementation for smooth scrolling 
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});

const slides = document.querySelectorAll('.slider img');
const slideNavLinks = document.querySelectorAll('.slider-nav a');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Automatically advance to the next slide every 3 seconds (adjust as needed)
function autoAdvance() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateNavLinks(currentSlide);
}

const slideInterval = setInterval(autoAdvance, 3000);

// Initial display of the first slide
showSlide(currentSlide);

// Event listeners for navigation buttons
slideNavLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(index);
        clearInterval(slideInterval); // Stop auto-advancing on manual navigation
        updateNavLinks(currentSlide);
    });
});

// Update navigation links to indicate the current slide
function updateNavLinks(currentIndex) {
    slideNavLinks.forEach((link, index) => {
        if (index === currentIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

}

// Get references to the buttons in the .slider-nav
const buttonSlide1 = document.querySelector('#button-slide-1');
const buttonSlide2 = document.querySelector('#button-slide-2');
const buttonSlide3 = document.querySelector('#button-slide-3');

// Add click event listeners to the buttons
buttonSlide1.addEventListener('click', () => {
  scrollToSlide('slide-1');
});

buttonSlide2.addEventListener('click', () => {
  scrollToSlide('slide-2');
});

buttonSlide3.addEventListener('click', () => {
  scrollToSlide('slide-3');
});