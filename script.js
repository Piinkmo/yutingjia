document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function() {
    // Toggle 'show' class on navbarCollapse
    navbarCollapse.classList.toggle('show');

    // Close the navbar when clicking outside of it (optional)
    document.addEventListener('click', function(event) {
      const isClickInsideNavbar = navbarCollapse.contains(event.target);
      const isClickOnNavbarToggler = navbarToggler.contains(event.target);

      if (!isClickInsideNavbar && !isClickOnNavbarToggler) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});
