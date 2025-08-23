const UPDATEINTERVAL = 3;
const INTERVALS = 50;



let chartedStonkName    = undefined;
let CHART               = undefined;


let STONKS = [
    {"name":"Nokia Oyj",	        "price":	39},
/*    {"name":"Kone Oyj",	            "price":	76},
    {"name":"Outokumpu Oyj",	    "price":	24},
    {"name":"Valmet Oyj",	        "price":	34},
    {"name":"Ahlstrom-Munksjö",	    "price":	40},
    {"name":"Rautaruukki Oyj",	    "price":	28},
    {"name":"Sampo Group",	        "price":	41},
    {"name":"Kesko Oyj",	        "price":	66},
    {"name":"Elisa Oyj",	        "price":	55},
    {"name":"Fortum Oyj",	        "price":	93},
    {"name":"Stora Enso",	        "price":	43},
    {"name":"UPM-Kymmene",	        "price":	56},
    {"name":"Metso Oyj",	        "price":	27},
    {"name":"Pohjola Group",	    "price":	100},
    {"name":"YIT Corporation",	    "price":	17},
    {"name":"Wärtsilä Corporation",	"price":	9},
    {"name":"Kraft Foods Finland",	"price":	71},
    {"name":"Atria Group",	        "price":	49}
    */
]


const findStonkByName = name => {

    const matches = STONKS.filter(s => s.name === name)

    if (matches.length == 0) {
        throw `Could not find stock by the name of '${name}'!`
    }

    return matches[0];
}


const handleStonkClick = stonkName => {

    const stonk = findStonkByName(stonkName);

    displayStockChart(stonk)

}


const updateChart = (newData, label) => {

    CHART.data.labels.push(label);
    CHART.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });

    CHART.update();
}

const displayStockChart = stonk => {
    const labels = stonk.prevprices.map((_, index) => `${index + 1}`);


    if (CHART !== undefined) {
        console.log('It is not undefined')
        CHART.destroy();
    }


    const ctx = document.getElementById('stonkChart').getContext('2d');




    const myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: stonk.prevprices,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    })

    CHART = myLineChart;
    chartedStonkName = stonk.name;
}


const round = num => {
    return Math.round(num * 100) / 100;
}

const lastOfArray = arr => arr[arr.length - 1];

const getPrevPrice = stonk => stonk.prevprices.length > 0 ? lastOfArray(stonk.prevprices) : stonk.price;

const getStonks = () => { return STONKS; }


const getNewDirection = prev => {

    if (Math.random() < 0.01) {
        return prev > 0 ? -1 : 1;
    }
    return prev;
}

const updatePrevPrices = stonk => {

    stonk.prevprices.push(stonk.price);

    if (stonk.prevprices.length > INTERVALS) {
        stonk.prevprices.shift();
    }

}



const updatePrice = stonk => {
    
    stonk.direction = getNewDirection(stonk.direction);
    stonk.price += ( Math.random() * 0.05) * stonk.direction; 
    stonk.price = round(stonk.price);

    console.log(stonk.name, stonk.price.toFixed(2), stonk.prevprices[0].toFixed(2), stonk.direction)

}

const buildRowOfStonk = stonk => {

    const change = round(stonk.price - getPrevPrice(stonk));
    const changeClass = change < 0 ? 'down' : 'up';
    const plus = change >= 0 ? '+' : '';

    const changeLong = (stonk.price - stonk.prevprices[0]).toFixed(2);
    const changeClassLong = change < 0 ? 'down' : 'up';
    const plusLong = changeLong >= 0 ? '+' : '-';


    return `<tr><td onClick="handleStonkClick('${stonk.name}')" >${stonk.name}</td><td>${stonk.price.toFixed(2)}</td><td class="${changeClass}">${plus}${change.toFixed(2)}</td><td class="${changeClassLong}">${plusLong}${changeLong} (${stonk.prevprices[0].toFixed(2)})</td></tr>`
}


const updateStonks = () => {
    STONKS.map(updatePrevPrices);
    STONKS.map(updatePrice) 
    return getStonks();
}

const getStonkTableBody = () => {
    return document.getElementById('stonk-table-body')
}

const updateTable = () => {

    updateStonks();
    stonks = getStonks();

    tbody = getStonkTableBody();
    tbody.innerHTML = '';

    rows = stonks.map(buildRowOfStonk);

    tbody.innerHTML = rows.join('');

    // Update chart with the latest figure 

    if (CHART === undefined) return;

    const chartedStonk = findStonkByName(chartedStonkName);

    updateChart(getPrevPrice(chartedStonk), chartedStonk.prevprices.length + 1);

}

const initStonks = () => {

    STONKS = STONKS.map(stonk => {
        stonk.prevprices = []
        stonk.direction = Math.random() > 0.5 ? 1 : -1;
        console.log(stonk)
        return stonk;
    });

    for (let i = 0; i < INTERVALS; i++) updateStonks();
}

initStonks();

updateTable();

setInterval(updateTable, UPDATEINTERVAL  * 1000);