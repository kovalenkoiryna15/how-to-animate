(()=>{var n,i,t;n=document.getElementById("root"),i={getTransitionTiming:function(n){return n},runTransition:function(n,i,a){var r=a/i;t.style.transform="translateX("+Math.min(r*n,a)+"px)"},duration:500,finalPosition:200},(t=document.createElement("div")).classList.add("ball"),t.addEventListener("click",(function(){return n=i,void requestAnimationFrame((function i(a){var r=n.duration,e=n.finalPosition;void 0===t&&(t=a);var o=a-t;(0,n.runTransition)((0,n.getTransitionTiming)(o),r,e),o<r&&window.requestAnimationFrame(i)}));var n,t})),n.append(t)})();