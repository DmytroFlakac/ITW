document.getElementById('mobile-menu').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');

    // Toggle icons
    const menuIcon = this.querySelector('.fa-bars');
    const closeIcon = this.querySelector('.fa-times');

    if (navbar.classList.contains('active')) {
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    } else {
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }
});
