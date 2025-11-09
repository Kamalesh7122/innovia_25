// NAVBAR SHOW/HIDE ON SCROLL
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > lastScrollY && window.scrollY > 50){
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// SCROLL PROGRESS BARS (TOP AND BOTTOM)
window.addEventListener('scroll', () => {
  const scrollProgressBottom = document.getElementById('scrollProgressBottom');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  if (scrollProgressBottom) {
    scrollProgressBottom.style.width = scrollPercentage + '%';
  }
});
