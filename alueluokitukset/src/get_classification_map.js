
const get_name_from_map_path = path => path.split('#')[1].split('_')[0]

const get_classification_map = async function(correspondenceTable) {
    // Returns a classification from the Statistics Finland API
    // https://data.stat.fi/api/classifications/v2/#!/classifications/classifications_read

    // The returned object is an instance of Classification (see. classification.js)


    console.log('Getting classification map', correspondenceTable);

    const name = get_name_from_map_path(correspondenceTable);
    
    const url = `${STATFIN_API_URL}/correspondenceTables/${correspondenceTable.replace('#','%23')}/maps`

    console.log("URL: ", url)

    let response;
    try {
        response = await fetch(url);
    } catch(e) {
        console.log(`Requested to ${url} failed with error: ${e}`);
        return undefined;
    }
    response = await response.json();

    // A list of lists. Each sublist contains a key-value pair
    const code_map = response.map((m) => {
        // The response is a list of URLs. We need to get the path, but it has hashtags in it and it's not URL-encoded.
        // We cannot use new URL().pathname because it splits the path on the hashtag. Replace hashtags with proper encoding
        const u = new URL(m.replace("#","%23"));
        return u.pathname.split('/').splice(-2,2);

    });

    // Make an object for easy access

    const m =  code_map.reduce((p,c) => {
        let code = c[0];
        let val  = c[1];
        p[code] = val;
        return p;
    } , {})

    incrementRequestCounter();
    updateRequestCounter();

    return  {
        'name': name, 
        'map': m
    }
        
}