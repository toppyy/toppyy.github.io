

const getClassification = async function(classification) {
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
        throw Error(`Requested to ${URL} failed with error: ${e}`);
    }
    response = await response.json();

    if (response.length == 0) {
        throw Error(`Statfin returned an empty classification for ${classification}`)
    }

    return response.map((url) => url.substring(url.length - 3, url.length));
}