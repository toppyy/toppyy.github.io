
const makeInvisible = node => {
    let currentClasses = node.getAttribute('class').split(";");    
    if (!currentClasses.find(c => c === 'invisible')) {
        currentClasses.push('invisible')
    }
    currentClasses = currentClasses.filter(c => c.length > 0);
    node.setAttribute('class', currentClasses.join(';'));
}

const makeVisible = node => {
    let currentClasses = node.getAttribute('class').split(";");
    currentClasses = currentClasses.filter(c => c !== 'invisible' && c.length > 0);
    node.setAttribute('class', currentClasses.join(";"));
}


const htlmElement = function(tag, innerHTML) {
    let elem = document.createElement(tag);
    if (innerHTML !== undefined) {
        elem.innerHTML = innerHTML;
    }
    return elem;
}

const ArrayToArrayOfCells = function(arr) {
    // Returns an array of <td> html elements with innerHTML corresponding to content of 'arr'
    return arr.map(a => htlmElement('td',a));
}

const displayError = function(msg) {
    const errorContainer = document.getElementById('error');
    makeVisible(errorContainer);
    errorContainer.innerHTML = msg;
}

// Returns name from path
// Eg. kunta_1_20230101%23maakunta_1_20230101/maps -> 'maakunta'
const getNameFromMapPath = path => path.split('#')[1].split('_')[0]

