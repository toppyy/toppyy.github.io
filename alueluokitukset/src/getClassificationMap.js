

const getClassificationMap = async function(correspondenceTable) {
    // Returns a classification from the Statistics Finland API
    // https://data.stat.fi/api/classifications/v2/#!/classifications/classifications_read

    // The returned object is an instance of Classification (see. classification.js)

    console.log('Getting classification map', correspondenceTable);

    const url = `${STATFIN_API_URL}/correspondenceTables/${correspondenceTable.replace('#','%23')}/maps`

    console.log("URL: ", url)

    try {
        return fetch(url);
    } catch(e) {
        throw Error(`Requested to ${url} failed with error: ${e}`);   
    }
        
}

const manipulateClassificationMap = async function(response) {

    const url = response.url;

    let data;
    try {
        data = await response.json();
    } catch(e) {
        throw Error(`Error parsing JSON-response from ${url}`)
    }

    if (data.length == 0) {
        throw Error(`Statfin returned an empty correspondencetable ${url}`)
    }

    // A list of lists. Each sublist contains a key-value pair
    const codemap = data.map((m) => {
        // The response is a list of URLs. We need to get the path, but it has hashtags in it and it's not URL-encoded.
        // We cannot use new URL().pathname because it splits the path on the hashtag. Replace hashtags with proper encoding
        const u = new URL(m.replace("#","%23"));
        return u.pathname.split('/').splice(-2,2);

    });

    // Make an object for easy access

    const m =  codemap.reduce((p,c) => {
        let code = c[0];
        let val  = c[1];
        p[code] = val;
        return p;
    } , {})

    return m;
        
}