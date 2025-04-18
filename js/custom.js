// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a'); // Get all nav links

    // --- Mobile Navigation Toggle ---
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the nav links list
            navLinks.classList.toggle('active');

            // Optional: Change hamburger icon to 'X' when menu is open
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Add aria-expanded attribute for accessibility
                navToggle.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                // Add aria-expanded attribute for accessibility
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Close Mobile Menu When a Link is Clicked ---
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the mobile menu is active before closing
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset the icon back to bars
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                 // Update aria-expanded attribute
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });


    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
