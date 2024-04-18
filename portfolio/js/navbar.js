document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('a[href="index.html"], a[href="#home"]');
    const aboutLink = document.querySelector('a[href="about.html"], a[href="#about"]');
    const portfolioLink = document.querySelector('a[href="portfolio.html"], a[href="#portfolio"]');
    const contactLink = document.querySelector('a[href="contact.html"], a[href="#contact"]');

    function updateNavigationLinks() {
        const width = window.innerWidth;

        if (width < 900) { // Mobile view
            homeLink.setAttribute('href', '#home');
            aboutLink.setAttribute('href', '#about');
            portfolioLink.setAttribute('href', '#portfolio');
            contactLink.setAttribute('href', '#contact');
        } else { // Desktop view
            homeLink.setAttribute('href', 'index.html');
            aboutLink.setAttribute('href', 'about.html');
            portfolioLink.setAttribute('href', 'portfolio.html');
            contactLink.setAttribute('href', 'contact.html');
        }
    }

    // Run on initial load
    updateNavigationLinks();

    // Update on resize
    window.addEventListener('resize', updateNavigationLinks);
});
