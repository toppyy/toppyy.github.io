import { startLavaRoom } from "./lavaroom/lavaroom.js";


const state = {
    'rooms': [
        {
            'id': 'lavaroom',
            'solved': false,
            'start': startLavaRoom
        }
    ],
    'currentRoom': null
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


