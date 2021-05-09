import { gsap } from "gsap";
import doggySVG from './assets/doggy.svg';

const root = document.getElementById('root');

const doggy = document.createElement('img');
doggy.setAttribute('src', doggySVG);
doggy.classList.add('doggy');
root.append(doggy);


