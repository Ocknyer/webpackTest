import { plus } from './plus.js';
import './style.css'
import android from './android.png';
import tiger from './tiger.png'

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${android}"/><img src="${tiger}"/>`;
})

console.log(plus(3, 7));