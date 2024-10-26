document.addEventListener("DOMContentLoaded", function () {
  // Initialize core functionality
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // Initialize Typed.js with expanded roles
  new Typed("#typed", {
    strings: [
      ".NET Developer",
      "Full Stack Developer",
      "Tech Enthusiast",
      "Software Developer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  // Create dynamic background elements
  initializeBackgroundEffects();
  initializeMobileMenu();
  initializeSmoothScrolling();
});

function initializeBackgroundEffects() {
  // Create particles container
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles-container";
  document.body.insertBefore(particlesContainer, document.body.firstChild);

  // Create orbital system
  const orbitalSystem = document.createElement("div");
  orbitalSystem.className = "orbital-system";
  document.body.insertBefore(orbitalSystem, document.body.firstChild);

  // Add center ball
  const centerBall = document.createElement("div");
  centerBall.className = "center-ball";
  orbitalSystem.appendChild(centerBall);

  // Create orbits with balls
  for (let i = 1; i <= 3; i++) {
    createOrbit(i, orbitalSystem);
  }

  // Create floating particles
  createParticles(particlesContainer);

  // Add interactive effects
  initializeInteractiveEffects(orbitalSystem);
}

function createOrbit(index, container) {
  const orbit = document.createElement("div");
  orbit.className = `orbit orbit-${index}`;

  const orbitalBall = document.createElement("div");
  orbitalBall.className = "orbital-ball";
  orbitalBall.style.left = `${Math.random() * 100}%`;
  orbitalBall.style.top = "50%";

  orbit.appendChild(orbitalBall);
  container.appendChild(orbit);
}

function createParticles(container) {
  const particleSizes = ["tiny", "small", "medium"];
  const numberOfParticles = 30;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement("div");
    const size =
      particleSizes[Math.floor(Math.random() * particleSizes.length)];
    particle.className = `particle particle-${size}`;

    // Random position and animation delay
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(particle);
  }
}

function initializeInteractiveEffects(orbitalSystem) {
  // Mouse move glow effect
  let glowTimeout;
  document.addEventListener("mousemove", (e) => {
    clearTimeout(glowTimeout);

    const glow = document.createElement("div");
    glow.className = "glow";
    glow.style.left = `${e.pageX - 50}px`;
    glow.style.top = `${e.pageY - 50}px`;
    document.body.appendChild(glow);

    glowTimeout = setTimeout(() => glow.remove(), 1000);

    // Parallax effect for orbital system
    // const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    // const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
    // orbitalSystem.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  });
}

function initializeMobileMenu() {
  const mobileMenuButton = document.querySelector(".md\\:hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  });
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}
