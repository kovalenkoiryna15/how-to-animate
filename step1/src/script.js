const root = document.getElementById('root');

const box = document.createElement('div');
box.classList.add('box');
root.append(box);

const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.classList.add('start-button');
startButton.setAttribute('type', 'button');
startButton.addEventListener('click', startAnimation);
root.prepend(startButton);


let xPosition = 0;

function move() {
  xPosition = xPosition + 5;
  box.style.transform = `translateX(${xPosition}px)`;
  let maxXPosition = document.documentElement.clientWidth - 200;
  if (xPosition < maxXPosition) {
    requestAnimationFrame(move);
  }
}

function startAnimation() {
  requestAnimationFrame(move);
}
