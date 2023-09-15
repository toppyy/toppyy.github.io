

const get_classification = async function(classification) {
    // Returns a classification from the Statistics Finland API
    // https://data.stat.fi/api/classifications/v2/#!/classifications/classifications_read

    // The returned object is an instance of Classification (see. classification.js)


    console.log('Getting classification', classification)
    
    const URL = `${STATFIN_API_URL}/classifications/${classification}/classificationItems`

    console.log("URL: ", URL)

    let response;
    try {
        response = await fetch(URL);
    } catch(e) {
        console.log(`Requested to ${URL} failed with error: ${e}`);
        return undefined;
    }
    response = await response.json();
    return response.map((url) => url.substring(url.length - 3, url.length));
}