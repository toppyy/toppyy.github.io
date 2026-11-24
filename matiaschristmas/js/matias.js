import { matiasAvatarSVG } from "./svg.js";
import { startLavaRoom } from "./rooms/lavaroom.js";
import { startLabyrinthRoom } from "./rooms/labyrinth.js";

import {
	setRooms, 
	hasNextRoom,
	getNextRoom,
	solveRoom
} from "./gamestate.js";


const moveToNextRoom = id => {
	console.log('moveToNextRoom()')
	solveRoom(id);
	startRoom();
}

const startRoom = () => {
	console.log('startRoom()')
	document.getElementById('app').innerHTML = '';

	if (hasNextRoom()) {
		let room = getNextRoom()
		console.log(room)
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


setRooms(
	[
		{
            'id': 'labyrinth',
            'solved': false,
            'start': startLabyrinthRoom
        },
		{
            'id': 'lavaroom',
            'solved': false,
            'start': startLavaRoom
        }
	]
)


start()