import { plus } from './plus.js';
import './style.css'
import android from './android.png';
import tiger from './tiger.png'

// document.addEventListener('DOMContentLoaded', () => {
//     document.body.innerHTML = `<img src="${android}"/><img src="${tiger}"/>`;
// })

console.log(plus(3, 7));

console.log(process.env.NODE_ENV)

let env;
if (process.env.NODE_ENV === 'development') {
    env = dev;
} else {
    env = pro;
}

console.log(env);
console.log(pro);