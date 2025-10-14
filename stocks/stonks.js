const UPDATEINTERVAL = 1;
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
    {"name":"Ramirent Oyj",	        "price":	55},
    {"name":"Fortum Oyj",	        "price":	93},
    {"name":"Stora Enso",	        "price":	43},
    {"name":"UPM-Kymmene",	        "price":	56},
    {"name":"Metso Oyj",	        "price":	27},
    {"name":"Pohjola Group",	    "price":	100},
    {"name":"YIT Corporation",	    "price":	17},
    {"name":"Wärtsilä Corporation",	"price":	9},
    {"name":"Teollisuuden Voima",	"price":	71},
    {"name":"Atria Group",	        "price":	49}
    
]




const round = num => {
    return Math.round(num * 100) / 100;
}


const getStonks = () => { return STONKS; }

const updatePrice = stonk => {

    stonk.prevPrice = stonk.price;

    const delta = (Math.random() - 0.5) * 2;
    stonk.price += delta;
    
    if (stonk.price < 0) stonk.price = -1 * stonk.price;

    if (stonk.price > stonk.max) {
        stonk.max = stonk.price
    }

    if (stonk.price < stonk.min) {
        stonk.min = stonk.price
    }

}


const buildRowOfStonk = stonk => {

    const change = round(stonk.price - stonk.prevPrice);
    const changeClass = change < 0 ? 'down' : 'up';
    const plus = change >= 0 ? '+' : '';

    const spread = `${stonk.min.toFixed(1)} - ${stonk.max.toFixed(1)}`

    const p_to_e = Math.round(stonk.price / stonk.earnings)
    
    return `<tr><td>${stonk.name}</td><td>${stonk.price.toFixed(2)}</td><td class="${changeClass}">${plus}${change.toFixed(2)}</td><td>${spread}</td><td>${p_to_e}</td></tr>`
}


const updateStonks = () => {
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

        stonk.price = 100 + ( (stonk.price / 100)  * 10)

        console.log(stonk.name, stonk.price)

        stonk.earnings = getRandomEarnings(stonk.price)

        return stonk;
    });

}

initStonks();

updateTable();


let i = 100;
while ((i--) > 0) {
    updateTable()
    // console.log(i)
}


setInterval(updateTable, UPDATEINTERVAL  * 1000);


// Handle clicks


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