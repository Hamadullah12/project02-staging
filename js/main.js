document.addEventListener("DOMContentLoaded", function () {
  // Create Staging navigation
  const navHTML = `
        <header>
            <nav class="navbar">
                <div class="logo">Staging<span class="dot">.</span></div>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="contact-info">
                    <span>Call us for any questions</span>
                    <div class="phone">+01 123 456 789</div>
                </div>
            </nav>
        </header>
    `;

  document.getElementById("navigation").innerHTML = navHTML;

  // Mobile Menu Functionality
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const body = document.body;

  // Toggle mobile menu
  if (mobileMenuToggle && mobileMenuOverlay) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuToggle.classList.toggle("active");
      mobileMenuOverlay.classList.toggle("active");
      body.style.overflow = mobileMenuOverlay.classList.contains("active")
        ? "hidden"
        : "auto";
    });

    // Close menu when clicking on overlay
    mobileMenuOverlay.addEventListener("click", function (e) {
      if (e.target === mobileMenuOverlay) {
        closeMenu();
      }
    });

    // Close menu when clicking on navigation links
    const mobileMenuLinks = document.querySelectorAll(".mobile-nav-menu a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Close menu function
    function closeMenu() {
      mobileMenuToggle.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      body.style.overflow = "auto";
    }

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        mobileMenuOverlay.classList.contains("active")
      ) {
        closeMenu();
      }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (
        window.innerWidth > 768 &&
        mobileMenuOverlay.classList.contains("active")
      ) {
        closeMenu();
      }
    });
  }
});
