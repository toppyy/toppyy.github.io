const download = function (data) {
  
    // Creating a Blob for having a csv file format 
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });
  
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
  
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
  
    // Passing the blob downloading url 
    a.setAttribute('href', url)
  
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'download.csv');
  
    // Performing a download with click
    a.click()
}

const arrayToCSV = function(rows, delimiter =";") {
    return rows.map(row => row.join(delimiter)).join('\n');
}

 // Manipulate the data and init download
 const downloadAsCSV = function(rows,headers) {
    download(arrayToCSV([headers].concat(rows)));
 }
