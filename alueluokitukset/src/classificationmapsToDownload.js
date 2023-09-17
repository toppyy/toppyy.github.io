

const classificationmapsToDownload = function(requestedYear) {
    return([
        `kunta_1_${requestedYear}0101#avi_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#ely_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#hyvinvointialue_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#tyossakayntial_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#kuntaryhmitys_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#maakunta_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#seutukunta_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#kielisuhde_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#suuralue_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#vaalipiiri_1_${requestedYear}0101`,
        `kunta_1_${requestedYear}0101#nuts_2_${requestedYear}0101`
    ]);
}