document.addEventListener("DOMContentLoaded", function () {
  // Create Staging navigation
  const navHTML = `\
        <header>
            <nav class="navbar">
                <div class="logo">Staging</div>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="projects.html">Projects</a></li>
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
});

// swiper cousel effect
