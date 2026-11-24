import { matiasCelebratingSVG } from "../svg.js";

export function startEnd(onSolve) {
    console.log('startEnd()')
    const app = document.getElementById('app');

    let div = document.createElement('div');
    div.setAttribute('id', 'matiasContainer')
    div.innerHTML = matiasCelebratingSVG("width = '100%'");
    app.appendChild(div)

    let hdr = document.createElement('h1');
    hdr.innerText = 'MATIAS IS HAPPY TRALALERO TRALALA';
    app.appendChild(hdr);
}





