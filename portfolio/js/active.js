document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 900) {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-list a");
  const sectionOffsets = [];
  let lastSectionIndex = sections.length - 1;

  // Calculate section offsets and heights once on page load
  sections.forEach((section) => {
    sectionOffsets.push(section.offsetTop);
  });

  function setActiveSection() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    let activeIndex = 0;
    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPos >= sectionOffsets[i]) {
        activeIndex = i;
        break;
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Keep the last navigation link active until scrolled back up
    if (activeIndex === lastSectionIndex && scrollPos + windowHeight >= documentHeight) {
      navLinks[lastSectionIndex].classList.add("active");
    } else {
      navLinks[activeIndex].classList.add("active");
    }
  }

  window.addEventListener("scroll", setActiveSection);
  setActiveSection(); // Call the function once on page load
}
});
