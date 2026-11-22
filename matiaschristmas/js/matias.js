import { matiasAvatarSVG } from "./lavaroom/lavaroom-svg.js";

import { 
	hasNextRoom,
	getNextRoom,
	solveRoom
} from "./gamestate.js";


const moveToNextRoom = id => {
	console.log('callback called')
	solveRoom(id);
	startRoom();
}

const startRoom = () => {
	document.getElementById('app').innerHTML = '';

	if (hasNextRoom()) {
		let room = getNextRoom()
		let id = room['id'];
		room['start'](() => {
			console.log('calling callback')
			moveToNextRoom(id)
		});
		return
	}
	throw Error('ALL ROOMS SOLVED')
}

const start = () => {

	let app = document.getElementById('app');

	let div = document.createElement('div');
	div.setAttribute('id', 'matiasContainer')
	div.innerHTML = matiasAvatarSVG("width = '100%'");
	app.appendChild(div)
	
	let startButton = document.createElement('button');
	startButton.innerText = 'Help Matias!';
	startButton.style = 'margin-top: 5%';
	app.appendChild(startButton);

	startButton.addEventListener('click', startRoom);
}


start()