  function toggleMenu() {
    document.querySelector(".navbar-right").classList.toggle("active");
  }

  // Dropdown toggle for mobile
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    });
  });
