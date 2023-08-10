const navbarPanel = document.querySelector('#navbar-panel');
fetch('navbar.html')
  .then((response) => response.text())
  .then((data) => {
    navbarPanel.innerHTML = data;
    const path = window.location.pathname;
    const currentPage = path.split('/').pop();
    const navLinks = navbarPanel.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
