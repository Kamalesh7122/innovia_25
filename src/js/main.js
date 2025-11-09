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

// COUNTDOWN TIMER - Event: November 6, 2025 at 9:00 AM IST
function updateCountdown() {
  const eventDate = new Date('2025-11-06T09:00:00+05:30').getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;
  
  if(diff < 0){
    document.getElementById('countdown').innerHTML = "<div style='font-size:1.5rem; color:#01ecfb;'>Event Started!</div>";
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerText = days.toString().padStart(2,'0');
  document.getElementById('hours').innerText = hours.toString().padStart(2,'0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2,'0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// PARALLAX SCROLLING EFFECT FOR BACKGROUND
const heroBg = document.querySelector('.hero-bg');
if(heroBg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if(heroSection) {
      const heroHeight = heroSection.offsetHeight;
      if(scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }
  });
}

// SMOOTH SCROLL FOR NAVIGATION LINKS
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if(targetSection) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// UPDATE ACTIVE NAV LINK ON SCROLL
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navbarHeight = document.getElementById('navbar').offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const correspondingLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if(correspondingLink) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        correspondingLink.classList.add('active');
      }
    }
  });
});

// SMOOTH ANIMATION FOR REGISTER BUTTON
const registerBtn = document.querySelector('.register-btn');
if(registerBtn) {
  registerBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
  
  registerBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
  
  registerBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(0) scale(0.98)';
  });
  
  registerBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
}

// SCROLL PROGRESS BAR
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  scrollProgress.style.width = scrollPercentage + '%';
});
