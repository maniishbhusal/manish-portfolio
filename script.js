document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS with snappier settings for neobrutalism
  AOS.init({
    duration: 400,
    once: true,
    offset: 50,
    easing: 'ease-out'
  });

  // Initialize mobile menu
  initializeMobileMenu();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize view more projects
  initializeViewMoreProjects();
});

function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu");

  if (mobileMenuButton && mobileMenu && closeMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });

    closeMenuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
}

function initializeViewMoreProjects() {
  const viewMoreBtn = document.getElementById("view-more-projects");
  const hiddenProjects = document.querySelectorAll(".hidden-project");

  if (viewMoreBtn && hiddenProjects.length > 0) {
    viewMoreBtn.addEventListener("click", () => {
      hiddenProjects.forEach((project) => {
        project.classList.add("show");
        AOS.refresh();
      });
      viewMoreBtn.style.display = "none";
    });
  }
}
