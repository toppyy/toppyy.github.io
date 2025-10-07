const UPDATEINTERVAL = 3;
const INTERVALS = 50;
const TITLE = "$$$";

let paused              = false;
let chartedStonkName    = undefined;
let CHART               = undefined;


let STONKS = [
    {"name":"Nokia Oyj",	        "price":	39},
    {"name":"Kone Oyj",	            "price":	76},
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
                label: stonk.name,
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



const updatePrevPrices = stonk => {

    stonk.prevprices.push(stonk.price);

    if (stonk.prevprices.length > INTERVALS) {
        stonk.prevprices.shift();
    }

}



const updatePrice = stonk => {

    const delta = Math.random() - 0.5;
    stonk.price += delta;

    if (stonk.price > stonk.max) {
        stonk.max = stonk.price
    }

    if (stonk.price < stonk.min) {
        stonk.min = stonk.price
    }

    console.log(stonk.name, stonk.price.toFixed(2), stonk.prevprices[0].toFixed(2))

}


const buildRowOfStonk = stonk => {

    const change = round(stonk.price - getPrevPrice(stonk));
    const changeClass = change < 0 ? 'down' : 'up';
    const plus = change >= 0 ? '+' : '';

    const spread = `${stonk.min.toFixed(1)} - ${stonk.max.toFixed(1)}`

    const p_to_e = Math.round(stonk.price / stonk.earnings)
    

    // onClick="handleStonkClick('${stonk.name}')"
    return `<tr><td>${stonk.name}</td><td>${stonk.price.toFixed(2)}</td><td class="${changeClass}">${plus}${change.toFixed(2)}</td><td>${spread}</td><td>${p_to_e}</td></tr>`
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

    if (paused) return;

    updateStonks();
    stonks = getStonks().sort((a,b) => b.price - a.price);

    tbody = getStonkTableBody();
    tbody.innerHTML = '';



    rows = stonks.map(buildRowOfStonk);

    tbody.innerHTML = rows.join('');

    // Update chart with the latest figure 

    if (CHART === undefined) return;

    const chartedStonk = findStonkByName(chartedStonkName);

    updateChart(getPrevPrice(chartedStonk), chartedStonk.prevprices.length + 1);

    sortTable(1)

}

const getRandomEarnings = price => {

    const pe = Math.random() * 40;

    return price/pe
}

const initStonks = () => {

    STONKS = STONKS.map(stonk => {
        stonk.prevprices = []
        stonk.min = stonk.price;
        stonk.max = stonk.price;

        stonk.earnings = getRandomEarnings(stonk.price)

        return stonk;
    });

    for (let i = 0; i < INTERVALS; i++) updateStonks();
}

initStonks();

updateTable();

setInterval(updateTable, UPDATEINTERVAL  * 1000);




const handlePause = () => {
    const modal = document.getElementById("myModal");
    if (paused) {
        document.title = TITLE;
        modal.style.display = "none";
    } else {
        document.title = `${TITLE} paused`;

        const highestPrice = getStonks()[0]

        modal.childNodes[1].innerHTML = `<center><h2>${highestPrice.name}!</h2><div id="money-emoji">💰</div></center>`
        modal.style.display = "block";
    }
    paused = !paused;

}

document.body.addEventListener('keypress', handlePause)
document.body.addEventListener('click', handlePause)