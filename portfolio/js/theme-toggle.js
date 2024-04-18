function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    // Optionally, store the theme preference in local storage
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Check local storage for theme preference on load
window.onload = function() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }
};
