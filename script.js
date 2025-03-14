// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to handle the scroll event
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Event listener for scrolling
window.addEventListener('scroll', handleScroll);

// Optional: Change menu link style on hover
const menuLinks = document.querySelectorAll('#navbar ul li a');
menuLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    link.style.color = '#00bcd4';
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseleave', function() {
    link.style.color = '';
    link.style.transform = '';
  });
});
