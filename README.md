## How to animate

### SVG

🦊 Here you can create SVGs - [SVGator](https://www.svgator.com/)

### Basic JavaScript Animations

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step 1:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tutorial](https://youtu.be/zBRqnSiq_VM) - [Demo](https://kovalenkoiryna15.github.io/how-to-animate/step1/)

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step 2:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Tutorial](https://learn.javascript.ru/js-animation) - [Demo](https://kovalenkoiryna15.github.io/how-to-animate/step2/)

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step 3:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) - [Demo](https://kovalenkoiryna15.github.io/how-to-animate/step3/)

### CSS Animations
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Tutorial made by HTML Academy](https://css-animations.io/)

property                  | values
------------------------- | --------------------
animation                 | name duration timing-function delay iteration-count direction fill-mode play-state
animation-name            | @keyframes name {}
animation-duration        | s, ms
animation-iteration-count | infinite or number
animation-direction       | alternate
animation-delay           | s, ms
animation-fill-mode       | forwards, backwards, both
animation-play-state      | running, paused
animation-timing-function | linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(), steps(), step-start, step-end

...

### [GSAP 3](https://www.creativecodingclub.com/courses/FreeGSAP3Express?ref=44f484)

Tween - анимация, которая может изменить <s>единственное</s> несколько свойств<s>о</s> <s>одного</s> нескольких объект<s>а</s>ов за провежуток времени одновременно для всех объектов или поочередно.

```js
  gsap.to()
  gsap.from()
  gsap.fromTo()
```

<table>
<tr>
<td> CSS </td>
<td> JavaScript </td>
</tr>
<tr>
<td>
<pre>
.star {
  animation-name: move-star;
  animation-duration: 3s;
}
@keyframes move-star {
  to {
    transform: translateX(750px);
  }
}
</pre>
</td>
<td>
<pre>
const star = document.querySelector('.star');
star.addEventListener('click', () => moveStar());
function step(time, duration, finalPosition) {
  const speed = finalPosition / duration;
  const step = Math.min(speed * time, finalPosition) + 'px';
  star.style.transform = `translateX(${step})`;
}
function moveStar() {
  let startTime;
  requestAnimationFrame(
    function animate(timestamp) {
      const duration = 3000;
      const finalPosition = 750;
      const runTransition = step;
      if(startTime === undefined) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      runTransition(elapsedTime, duration, finalPosition);
      if (elapsedTime < duration) {
        window.requestAnimationFrame(animate);
      }
  });
}
</pre>
</td>
</tr>
<tr>
<td colspan="2">
GSAP

<pre>
gsap.to('.star', { x: 750, duration: 3 });
</pre>
</td>
</tr>
</table>

Timeline - контейнер для нескольких tweens.

