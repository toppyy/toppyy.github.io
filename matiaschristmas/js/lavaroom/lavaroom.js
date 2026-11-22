import {
    lavaSVG,
    exitSVG,
    leverDownSVG,
    leverSVG,
    blockSVG,
    matiasAvatarSVG
 } from "./lavaroom-svg.js";


const WALL = 'WALL';
const BLOCK = 'BLOCK';
const EMPTY = 'EMPTY';
const ENTRY = 'ENTRY';
const LAVA = 'LAVA';
const EXIT = 'EXIT';
const LEVER = 'LEVER';
const LEVERDOWN = 'LEVERDOWN';
const MATIAS = 'MATIAS'
const LAVACOLOR = 'rgb(216, 33, 33)';
const DRAINSPEED = 50;
const FLOODSPEED = 100;


let renderType = type => {

	if (type == WALL) return '#';
	if (type == BLOCK) return blockSVG();
	if (type == ENTRY) return '#';
	if (type == LAVA) return lavaSVG();
	if (type == EMPTY) return '';
	if (type == EXIT) return exitSVG();
	if (type == LEVER) return leverSVG();
	if (type == LEVERDOWN) return leverDownSVG();
	if (type == MATIAS) return matiasAvatarSVG();

	throw Error("UNKNOWN TYPE '" + type + "'!");
}

let charToType = {
	'#': WALL,
	'O': BLOCK,
	'E': ENTRY,
	'M': MATIAS,
	'L': LEVER,
	'D': LEVERDOWN,
	'X': EXIT,
	'A': LAVA,
	' ': EMPTY,
	'': EMPTY
}



let MAP = [
  '############E#########',
  '#                    #',
  '#   OO  O         O  #',
  '#            O       #',
  '#                    #',
  '#     O              #',
  '# O                  #',
  '#                O   #',
  '#     OOO            #',
  '#OOOOOO              #',
  '#  M  O   O    OO    #',
  '#  L  O              #',
  '##########X###########',
];

// Globals, but not constants
let MATIASLOC = [null,null];
let GAMESTOPPED = false;
let ROWS = null;
let COLS = null;
let FLOODED = [];
const elem = (tag,html='') => {	
	let e = document.createElement(tag);
	e.innerHTML = html;
	return e;
}

const setNotification = (text) => {
	document.getElementById('announcement').textContent = text;
}




const initMap = target => {

	let tbl = elem('table');
	tbl.id = 'tbl';
	let tbody = elem('tbody');
	tbl.appendChild(tbody);

	ROWS = MAP.length;

	for (let ri = 0; ri < MAP.length; ri++) {

		FLOODED.push([]); // init an empty array per row

		let chrs = MAP[ri].split('');
		COLS = chrs.length;
		let row = elem('tr');
		for (let ci = 0; ci < chrs.length; ci++) {
			let chr = chrs[ci]
			let type = charToType[chr]
			if (type == MATIAS) {
				MATIASLOC = [ri,ci];
			}
			let e = elem('td',renderType(type))
			e.setAttribute('type',type);

			if (type == LEVER) {
				// Add a special attribute for lever
				// as it needs to return pulled after matias has visited
				e.setAttribute('lever','true');	

			}
			row.appendChild(e);
		}
	
		tbody.appendChild(row);
	}

	target.appendChild(tbl);
}

const move = (dir) => {

	if (GAMESTOPPED) return;

	if (MATIASLOC[0] === null) {
	  throw Error('WHERE IS MATIAS!')
	}

	if (dir[0] == 0 && dir[1] == 0) return;

	updateMatiasLocation(dir);
}

const handleKeyDown = (e) => {

	let key = e.keyCode;

	let dir = [0,0];
	if (key == 40) { dir = [ 1,0] } // Down
	if (key == 38) { dir = [-1,0] } // Up
	if (key == 37) { dir = [0,-1] } // Left
	if (key == 39) { dir = [0, 1] } // Right

	move(dir);
}

const isValidCoord = (row,col) => {

	if (row <  0) { console.log('row < 0', row,col); return false; }
	if (row >= ROWS) { console.log('row > ROWS', row,col); return false; }

	if (col <  0) { console.log('col < 0', row,col); return false; }
	if (col >= COLS) { console.log('col > COLS', row,col); return false; }

	return true;
}


const matiasHasValidCoords = () => isValidCoord(MATIASLOC[0],MATIASLOC[1]);

const moveBlockTo = (r,c,dir) => {
	console.log(r,c,dir)
	
	let newr = r + dir[0];
	let newc = c + dir[1];

	if (!isValidCoord(newr,newc)) return false;

	let cell = getCell(newr,newc);

	if (getType(cell) != EMPTY) return false;

	changeType(cell, BLOCK);
	changeType(getCell(r,c), EMPTY);

	return true;
}

const getType = elem => elem.getAttribute('type');
const setType = (elem,type) => elem.setAttribute('type',type);
const changeType = (elem,type) => {
	setType(elem,type);
	elem.innerHTML = renderType(type);
}

const updateMatiasLocation = dir => {


	if (!matiasHasValidCoords()) {
		console.log(MATIASLOC);
		throw Error('MATIAS HAS INVALID COORDS!');
	}

	const tbl = document.getElementById('tbl').childNodes[0];

	// Check if new coords would be OK
	let proposed = [MATIASLOC[0] + dir[0], MATIASLOC[1] + dir[1]];
	console.log(proposed);

	if (!isValidCoord(proposed[0], proposed[1])) {
		return false;
	}

	let cell = getCell(proposed[0], proposed[1]);
	let type = getType(cell);



	if (
		type == WALL ||
		type == ENTRY
	) {
		return false;
	}

	if (type == BLOCK) {
		if (!moveBlockTo(proposed[0], proposed[1], dir)) {
			return false;
		}
	}

	if (type == LEVER) {
		startFlood();
	}

	changeType(cell, MATIAS);

	// Clear old
	let oldCell = getCell(MATIASLOC[0], MATIASLOC[1]);
	changeType(oldCell, EMPTY);

	// Check for special case
	if (oldCell.getAttribute('lever') === 'true') {
		changeType(oldCell, LEVERDOWN);
	}

	if (type == EXIT) { 
		matiasFailedAgain();
		return;
	}

	// Update new location
	MATIASLOC = proposed;

	if (
		MATIASLOC[0] == 0 ||
		MATIASLOC[0] == (ROWS-1)
	) {
		matiasEscaped();
	}


	return true;
}


const getCell = (r,c) => {
	if (!isValidCoord(r,c)) { return null; }
	return document.getElementById('tbl').childNodes[0].childNodes[r].childNodes[c];
}

const getCellContent = (r,c) => {
	let cell = getCell(r,c);
	if (cell == null) return cell;
	return cell.innerHTML;
}


const setColor = (e,color) => {
	e.style.backgroundColor = color;
	return e;
}

const startFlood = async () => {

	setNotification('Oh no, dangerous lava! Skibidi rizz ohio!');

	let start = -1;
	let exit  = [0,0];
	for (let i = 0; i < COLS; i++) {
		if (getType(getCell(0,i)) == ENTRY) {
			start = i;
		}
		if (getType(getCell(ROWS - 1, i)) == EXIT) {
			exit = [ROWS - 1, i];
			console.log('EXIT',exit);
		}
	}
	if (start == -1) throw Error('ENTRY CAN`T BE FOUND!');

	flood(0,start);

}

const drain = async () => {

	 
	for (let r = 0; r < ROWS; r++) {

		while (FLOODED[r].length > 0) {
			let index = Math.floor(Math.random() * FLOODED[r].length);
			let [c] = FLOODED[r].splice(index, 1);
			changeType(getCell(r,c), EMPTY);
			await sleep(DRAINSPEED);
		}

	}
}



const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const flood = async (r,c) => {

	await sleep(FLOODSPEED);
	
	if (GAMESTOPPED) return;
	if (!isValidCoord(r,c)) return;

	let cell = getCell(r,c);
	let cellType = getType(cell);

	if (r == MATIASLOC[0] && c == MATIASLOC[1]) {
		matiasFailedAgain();
	}

	if (cellType == LAVA) return;
	if (cellType != EMPTY && cellType != ENTRY && cellType != EXIT) return;

	
	changeType(cell, LAVA);
	FLOODED[r].push(c);

	
	// The first one to see exit starts the drain
	if (cellType == EXIT) {
		drain(r,c);
		return;
	}

	flood(r-1,c);
	flood(r+1,c);
	flood(r,c-1);
	flood(r,c+1);
	flood(r-1,c-1);
	flood(r+1,c+1);
	flood(r+1,c-1);
	flood(r-1,c+1);
}

const setMsg = msg => document.getElementById('msg').innerHTML = `<h1>${msg}</h1>`;



const matiasFailedAgain = () => {
	GAMESTOPPED = true;
	setMsg('MATIAS HAS FAILED!!');
}

const matiasEscaped = () => {
	GAMESTOPPED = true;
	setMsg('MATIAS HAS ESCAPED!!')
}

const getGrid = () => document.getElementById('grid')

export function startLavaRoom() {
	const grid = getGrid(); 
	grid.innerHTML = '';
	setNotification("Oh no! Matias is trapped and needs to escape!");
	setMsg('');
	initMap(grid);
	GAMESTOPPED = false;

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', startLavaRoom);

    const controlDirs = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1]
    };

    document.querySelectorAll('#controls button').forEach(button => {
        button.addEventListener('click', () => move(controlDirs[button.dataset.dir]))
    });
}




