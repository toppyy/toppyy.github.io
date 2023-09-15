



const html_elem = function(tag, innerHTML) {
    let elem = document.createElement(tag);
    if (innerHTML !== undefined) {
        elem.innerHTML = innerHTML;
    }
    return elem;
}

const array_to_array_of_tds = function(arr) {
    // Returns an array of <td> html elements with innerHTML corresponding to content of 'arr'
    return arr.map(a => html_elem('td',a));
}