const root = document.getElementById('root');

const ANIMATION_DESCRIPTION = {
  getTransitionTiming: getLinearTiming,
  runTransition: step,
  duration: 500,
  finalPosition: 200
}

const ball = document.createElement('div');
ball.classList.add('ball');
ball.addEventListener('click', () => runAnimation(ANIMATION_DESCRIPTION));
root.append(ball);

// TRANSITION TIMING FUNCTIONS

function getLinearTiming(timeFraction) {
  return timeFraction
}

// TRANSITION DESCRIPTION

function step(transitionTime, duration, finalPosition) {
  const speed = finalPosition / duration;

  ball.style.transform = 'translateX(' + Math.min(speed * transitionTime, finalPosition) + 'px)';
}

// ANIMATION PROGRESS

function runAnimation(description) {
  let startTime;

  requestAnimationFrame(function animate(timestamp) {
    const { getTransitionTiming, runTransition, duration, finalPosition } = description;

    if(startTime === undefined) startTime = timestamp;

    const elapsedTime = timestamp - startTime;

    let transitionTime = getTransitionTiming(elapsedTime);

    runTransition(transitionTime, duration, finalPosition);

    if (elapsedTime < duration) {
      window.requestAnimationFrame(animate);
    }
  });
}
