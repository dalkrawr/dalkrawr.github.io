const text = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  let progress = scrollY / windowHeight;
  progress = Math.min(Math.max(progress, 0), 1);

  const opacity = 1 - progress;
  const translateY = -progress * 50;
  const scale = 1 - progress * 0.3;

  text.style.opacity = opacity.toFixed(2);
  text.style.transform = `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale.toFixed(2)})`;
});

const typedText = document.getElementById('typed-text');
const heroText = document.querySelector('.hero-text');
const fullText = heroText.getAttribute('data-text');

let i = 0;
const typeDelay = 150; // ms

function typeNextChar() {
if (i < fullText.length) {
    typedText.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeNextChar, typeDelay);
}
}

document.addEventListener("DOMContentLoaded", () => {
setTimeout(typeNextChar, typeDelay);
});