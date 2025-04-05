document.addEventListener("DOMContentLoaded", () => {
    // Auto-year for footer
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    if (footer) {
      footer.innerHTML = `&copy; ${year} Nanny Driver. All rights reserved.`;
    }
  
    // Typewriter effect for homepage
    const typewriterElementHome = document.getElementById("typewriter");
    if (typewriterElementHome) {
      const homeText = "Safe, certified drivers. Modern, comfortable vehicles. For infants to young adults.";
      let homeIndex = 0;
  
      function typeWriterHome() {
        if (homeIndex < homeText.length) {
          typewriterElementHome.innerHTML += homeText.charAt(homeIndex);
          homeIndex++;
          setTimeout(typeWriterHome, 35);
        }
      }
  
      typeWriterHome();
    }
  
    // Typewriter effect for about page
    const typewriterElementAbout = document.getElementById("about-typewriter");
    if (typewriterElementAbout) {
      const aboutText = "Peace of Mind in Every Mile";
      let aboutIndex = 0;
  
      function typeWriterAbout() {
        if (aboutIndex < aboutText.length) {
          typewriterElementAbout.innerHTML += aboutText.charAt(aboutIndex);
          aboutIndex++;
          setTimeout(typeWriterAbout, 40);
        }
      }
  
      typeWriterAbout();
    }
  });
  