
const getAndJoinClassifications = async function(correspondenceTables, municipalityClassificationKey) {
    // Get municipalities
    const municipalities = await getClassification(municipalityClassificationKey);

    // Get classification maps
    // const maps = []
    // for (m of correspondenceTables) {
    //     maps.push(await getClassificationMap(m));
    // }

    let maps = await Promise.all(correspondenceTables.map(getClassificationMap));

    // from getClassificationMap.js
    maps = await Promise.all(maps.map(manipulateClassificationMap));

    // Make a list of lists to turn into table rows
    // Each sublist start with the municipality code and is followed by other classifications that map to it
    let codeMap = [];
    for (municipality of municipalities) {
        let row = [municipality];
        for (map of maps) {
            row.push(map[municipality]);
        }
        codeMap.push(row);
    }

    return codeMap;

}