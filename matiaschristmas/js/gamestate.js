import { startLavaRoom } from "./rooms/lavaroom.js";


let state = {
    'rooms': [],
    'currentRoom': null
}

export function setRooms(rooms) {
    state['rooms'] = rooms;
}

export function getState() {
    return state;
}

export function hasNextRoom() {
    for (let i = 0; i < state['rooms'].length; i++) {
        if (!state['rooms'][i]['solved']) return true;
    }
    return false;
}

export function getNextRoom() {
    for (let i = 0; i < state['rooms'].length; i++) {
        if (!state['rooms'][i]['solved']) return state['rooms'][i];
    }
    return null
}

export function solveRoom(roomid) {

    for (let i = 0; i < state['rooms'].length; i++) {
        if (state['rooms'][i]['id'] === roomid) {
            state['rooms'][i]['solved'] = true;
            return true;
        }
    }
    throw Error(`Unknown room '${roomid}' can't be solved`)
}


