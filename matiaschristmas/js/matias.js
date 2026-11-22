import { 
	getState,
	hasNextRoom,
	getNextRoom,
	solveRoom
} from "./gamestate.js";


const moveToNextRoom = id => {
	console.log('callback called')
	solveRoom(id);
	start();
}

const start = () => {
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

start()