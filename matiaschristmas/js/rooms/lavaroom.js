import * as grid from "./grid.js";


export function startLavaRoom(onSolve) {

	console.log('startLavaRoom', onSolve)

	let map = [
	'############E#########',
	'#                    #',
	'#   OO  O         O  #',
	'#            O       #',
	'#                    #',
	'#     O              #',
	'# O        M         #',
	'#     O           O  #',
	'#     OOO            #',
	'#O   O               #',
	'#        O    OO     #',
	'#  L                 #',
	'##########X###########',
	];

	grid.startGrid(map, onSolve)
	grid.setNotification("Oh no! Matias is trapped! How to get out?");
	
}




