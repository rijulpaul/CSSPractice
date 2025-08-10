const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position within the card
  const y = e.clientY - rect.top;  // Y position within the card

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Adjust tilt amount
  const rotateX = ((y - centerY) / centerY) * 30; // Tilt up/down
  const rotateY = ((x - centerX) / centerX) * 30; // Tilt left/right

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

