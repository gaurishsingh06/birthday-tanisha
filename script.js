
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 12000);
}

window.onload = () => {
  for (let i = 0; i < 25; i++) {
    setTimeout(createBalloon, i * 500);
  }
  document.body.style.animation = 'pop 1s ease-out';
};
