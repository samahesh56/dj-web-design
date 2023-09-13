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

// Get references to HTML elements
const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

// Initially hide all slides except the first one
const slides = document.querySelectorAll(".slider > *");
for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// Add event listeners to the buttons
prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

function showSlide(slideIndex) {
    // Hide the current slide
    slides[currentSlide].style.display = "none";

    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideIndex;
    }

    // Show the new current slide
    slides[currentSlide].style.display = "block";
}

// Initially, show the first slide
showSlide(currentSlide);