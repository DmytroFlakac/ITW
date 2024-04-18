document.addEventListener("DOMContentLoaded", function() {
    let previousWidth = window.innerWidth; // Store the initial width

    function updateNavigationLinks() {
        const currentWidth = window.innerWidth;
        id = window.location.href.split("/").pop().replace('.html', '');
        // Check if the current width is mobile width and it was not mobile before
        if (currentWidth < 900 && previousWidth >= 900) {
            returnIndex(id); // Call returnIndex function if transitioning to mobile
        }

        previousWidth = currentWidth; // Update the previous width for next check
    }

    // Check if the initial load is in mobile view
    if (window.innerWidth < 900) {
        returnIndex(id);
    }

    // Listen for window resize events
    window.addEventListener('resize', updateNavigationLinks);
});

function returnIndex(id) {
  window.location="index.html" + "#" + id;
}
