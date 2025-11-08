document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});
