document.getElementById('congratsLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('message').classList.remove('hidden');
  launchConfetti();
});

function launchConfetti() {
  const confetti = document.createElement('script');
  confetti.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
  document.body.appendChild(confetti);

  confetti.onload = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const confettiSettings = {
      angle: 90,
      spread: 45,
      startVelocity: 30,
      elementCount: 200,
      dragFriction: 0.1,
      duration: duration,
      stagger: 0,
      width: "10px",
      height: "10px",
      colors: ['#ff4081', '#00e5ff', '#00c853', '#ffab00']
    };

    const interval = setInterval(function() {
      confetti.create(document.body, confettiSettings)();
      if (Date.now() > animationEnd) {
        clearInterval(interval);
      }
    }, 100);
  };
}
