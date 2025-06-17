const loadMoreBtn = document.querySelector(".load-more");
const hiddenSections = document.querySelectorAll(".cards");

loadMoreBtn.addEventListener("click", () => {
  hiddenSections.forEach(section => section.style.display = "block");
  loadMoreBtn.style.display = "none";
});



document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();


  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;


  alert(`Thanks ${name}! Your message has been received.`);


  this.reset();
});


function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 80; // Increased particle count

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');

    // Add different particle types for variety
    if (i % 3 === 0) {
      particle.className = 'particle glow';
    } else if (i % 5 === 0) {
      particle.className = 'particle large';
    } else {
      particle.className = 'particle';
    }

    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 15) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles when page loads
createParticles();

// Cursor glow effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor-glow') || createCursorGlow();
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

function createCursorGlow() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  document.body.appendChild(cursor);
  return cursor;
}

// Optional: Add more particles on mouse movement
document.addEventListener('mousemove', (e) => {
  if (Math.random() < 0.02) { // 2% chance to create particle on mouse move
    createTemporaryParticle(e.clientX, e.clientY);
  }
});

function createTemporaryParticle(x, y) {
  const particle = document.createElement('div');
  particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 3px;
                height: 3px;
                background: #00f5ff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 0 10px #00f5ff;
                animation: fadeOut 2s ease-out forwards;
            `;

  document.body.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    document.body.removeChild(particle);
  }, 2000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeOut {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0) translateY(-50px);
                }
            }
        `;
document.head.appendChild(style);



 const toggle = document.getElementById('toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });