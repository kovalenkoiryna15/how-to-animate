const root = document.getElementById('root');

const ANIMATION_DESCRIPTION = {
  getTransitionTiming: getTimingLikeShootAnArrow,
  runTransition: move,
  duration: 5000
}

const ball = document.createElement('div');
ball.classList.add('ball');
ball.addEventListener('click', () => runAnimation(ANIMATION_DESCRIPTION));
root.append(ball);

// TRANSITION TIMING FUNCTIONS

function getLinearTiming(timeFraction) {
  return timeFraction
}

function getQuadTiming(timeFraction) {
  const SPEED_INCREASE = 2;

  return timeFraction ** SPEED_INCREASE
}

function getCircTiming(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction))
}

function getTimingLikeShootAnArrow(timeFraction, x = 2.5) {
  return timeFraction ** 2 * ((x + 1) * timeFraction - x)
}

// TRANSITION DESCRIPTION

function move(progress) {
  const START_POSITION = 500;

  ball.style.left = progress * 1000 + START_POSITION + 'px';
}

// ANIMATION PROGRESS

function runAnimation(description) {
  let startTime = performance.now();

  requestAnimationFrame(function animate(time) {
    const { getTransitionTiming, runTransition, duration } = description;

    let timeFraction = (time - startTime) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = getTransitionTiming(timeFraction);

    runTransition(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
