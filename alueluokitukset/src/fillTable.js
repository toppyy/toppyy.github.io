const fillTable = function(rows, headers, resultTbl) {

    // Build header
    const header = htlmElement('thead');
   
    for (h of headers) {
        header.appendChild(htlmElement('th',h));
    }
    resultTbl.appendChild(header);

    // Init table body
    const tbody = htlmElement('tbody');

    // Make a row for each municipality
    for (row of rows) {
        let rowElement = htlmElement('tr');
        for (cell of ArrayToArrayOfCells(row)) {
            rowElement.appendChild(cell);
        }
        tbody.appendChild(rowElement);
    }

    // Add the body
    resultTbl.appendChild(tbody)  
}