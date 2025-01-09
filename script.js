document.getElementById('celebrateLink').addEventListener('click', function() {
  // Show the congratulatory message
  document.getElementById('message').classList.remove('hidden');

  // Trigger confetti effect
  startConfetti();
});

// Function to start confetti
function startConfetti() {
  const confetti = document.createElement('div');
  confetti.id = 'confetti';
  document.body.appendChild(confetti);

  const canvas = document.createElement('canvas');
  confetti.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Particle settings
  const particles = [];
  const colors = ['#ff0', '#ff6347', '#ff1493', '#32cd32', '#1e90ff'];

  function createParticle() {
    const particle = {
      x: Math.random() * canvas.width,
      y: -10,
      size: Math.random() * 5 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 4 + 2
    };
    particles.push(particle);
  }

  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.size *= 0.99;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Remove particles when they're too small
      if (particle.size < 0.5) {
        particles.splice(index, 1);
      }
    });

    if (particles.length < 100) {
      createParticle();
    }

    requestAnimationFrame(updateConfetti);
  }

  updateConfetti();
}
