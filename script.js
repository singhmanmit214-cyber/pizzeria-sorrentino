 let currentMode = "";
let currentTable = null;
let orders = {};

const megaMenu = {
    "GETRÄNKE": {
        "ALKOHOLFREI": [
            {id: "W1", name: "S. Pellegrino 0.25l", price: 3.00},
            {id: "W2", name: "S. Pellegrino 0.75l", price: 7.50},
            {id: "W3", name: "Aqua Panna 0.25l", price: 3.00},
            {id: "W4", name: "Aqua Panna 0.75l", price: 7.50},
            {id: "C1", name: "Coca Cola 0.20l", price: 3.00},
            {id: "C2", name: "Coca Cola 0.33l", price: 3.50},
            {id: "CZ1", name: "Cola Zero 0.20l", price: 3.00},
            {id: "CZ2", name: "Cola Zero 0.33l", price: 3.50},
            {id: "F1", name: "Fanta 0.20l", price: 3.00},
            {id: "F2", name: "Fanta 0.33l", price: 3.50},
            {id: "S1", name: "Sprite 0.20l", price: 3.00},
            {id: "S2", name: "Sprite 0.33l", price: 3.50},
            {id: "M1", name: "Mezzo Mix 0.20l", price: 3.00},
            {id: "M2", name: "Mezzo Mix 0.33l", price: 3.50},
            {id: "A1", name: "Apfelschorle 0.20l", price: 3.00},
            {id: "A2", name: "Apfelschorle 0.33l", price: 3.50},
            {id: "O1", name: "Orangensaft 0.20l", price: 3.00},
            {id: "O2", name: "Orangensaft 0.33l", price: 3.50},
            {id: "V1", name: "Fassbrause 0.33l", price: 4.00},
            {id: "V2", name: "Vio Zitrone 0.33l", price: 4.00},
            {id: "V3", name: "Vio Rhabarber 0.33l", price: 4.00},
            {id: "V4", name: "Vio Johannisbeer 0.33l", price: 4.00},
            {id: "V5", name: "Vio Apfelschorle 0.33l", price: 4.00},
            {id: "V6", name: "Vio Orangensaft 0.33l", price: 4.00}
        ],
        "APERITIFS": [
            {id: "AP1", name: "Prosecco 0.1l", price: 6.00},
            {id: "AP2", name: "Aperol Spritz 0.2l", price: 7.50},
            {id: "AP3", name: "Martini Blanco 0.1l", price: 6.50},
            {id: "AP4", name: "Gin Tonic 0.2l", price: 8.50},
            {id: "AP5", name: "Campari Soda 0.2l", price: 6.50},
            {id: "AP6", name: "Campari Orange 0.2l", price: 7.50},
            {id: "AP7", name: "Limoncello Spritz 0.2l", price: 7.50},
            {id: "AP8", name: "Lillet 0.2l", price: 7.50},
            {id: "AP9", name: "Mojito 0.2l", price: 9.50}
        ],
        "BIER": [
            {id: "B1", name: "Kölsch 0.2l", price: 3.00},
            {id: "B2", name: "Kölsch 0.3l", price: 3.50},
            {id: "B3", name: "Pils 0.3l", price: 4.00},
            {id: "B4", name: "Jever 0.3l", price: 4.00},
            {id: "B5", name: "Jever Fun (AF) 0.3l", price: 4.00},
            {id: "B6", name: "Weizenbier 0.5l", price: 6.00},
            {id: "B7", name: "Weizenbier (AF) 0.5l", price: 6.00},
            {id: "B8", name: "Malzbier 0.33l", price: 4.00}
        ],
        "WEIN": [
            {id: "VB1", name: "Pinot Grigio 0.2l", price: 6.50},
            {id: "VB2", name: "Pinot Grigio 0.5l", price: 14.00},
            {id: "VB3", name: "Pinot Grigio 1.0l", price: 26.00},
            {id: "VRS1", name: "Rosato 0.2l", price: 6.50},
            {id: "VRS2", name: "Rosato 0.5l", price: 14.00},
            {id: "VRS3", name: "Rosato 1.0l", price: 26.00},
            {id: "VR1", name: "Montepulciano 0.2l", price: 6.50},
            {id: "VR2", name: "Montepulciano 0.5l", price: 14.00},
            {id: "VR3", name: "Montepulciano 1.0l", price: 26.00},
            {id: "VR4", name: "Lambrusco 0.2l", price: 6.50},
            {id: "VR5", name: "Lambrusco 0.5l", price: 14.00},
            {id: "VR6", name: "Lambrusco 1.0l", price: 26.00}
        ],
        "SPIRITS": [
            {id: "S1", name: "Ramazotti 4cl", price: 6.00},
            {id: "S2", name: "Averna 4cl", price: 6.00},
            {id: "S3", name: "Montenegro 4cl", price: 6.00},
            {id: "S4", name: "Sambuca 4cl", price: 6.00},
            {id: "S5", name: "Jack Daniels 4cl", price: 8.00},
            {id: "S6", name: "Wodka 4cl", price: 6.50},
            {id: "G1", name: "Grappa Riserva", price: 6.00},
            {id: "G2", name: "Sarpa Oro", price: 8.00}
        ],
        "HEISS": [
            {id: "H1", name: "Espresso", price: 2.50},
            {id: "H2", name: "Kaffee", price: 3.00},
            {id: "H3", name: "Cappuccino", price: 3.50},
            {id: "H4", name: "Latte Macchiato", price: 4.00},
            {id: "H5", name: "Tee", price: 2.00}
        ]
    },
    "ESSEN": {
        "ANTIPASTI": [
            {id: "1", name: "Bruschetta Clasic", price: 8.50},
            {id: "1a", name: "Focaccia", price: 6.50},
            {id: "–", name: "Pizzabrötchen", price: 5.50},
            {id: "2", name: "Caprese", price: 12.50},
            {id: "3", name: "Carpaccio Manzo", price: 14.00},
            {id: "4", name: "Carpaccio Pesce", price: 14.50},
            {id: "5", name: "Antipasto Ital.", price: 24.50},
            {id: "6", name: "Antipasto Veg.", price: 11.50},
            {id: "7", name: "Ziegenkäse", price: 15.50}
        ],
        "PIZZA": [
            {id: "20", name: "Pizza Margherita", price: 10.50},
            {id: "21", name: "Pizza Bufalina", price: 12.00},
            {id: "22", name: "Pizza Primavera", price: 12.00},
            {id: "23", name: "Pizza Salami", price: 12.00},
            {id: "24", name: "Pizza Prosciutto", price: 12.00},
            {id: "25", name: "Pizza Funghi", price: 12.00},
            {id: "26", name: "Pizza Pugliese", price: 14.00},
            {id: "27", name: "Pizza Inferno", price: 13.00},
            {id: "28", name: "Pizza Spinaci", price: 12.00},
            {id: "29", name: "Pizza Pros/Funghi", price: 13.50},
            {id: "30", name: "Pizza Tonno", price: 13.50},
            {id: "31", name: "Pizza Hawaii", price: 13.00},
            {id: "32", name: "Pizza Verdura", price: 14.50},
            {id: "33", name: "Pizza 4 Stagioni", price: 14.50},
            {id: "34", name: "Pizza 4 Formaggi", price: 14.50},
            {id: "35", name: "Pizza Carciofi", price: 14.50},
            {id: "36", name: "Pizza Calzone", price: 15.00},
            {id: "37", name: "Pizza Rustica", price: 14.50},
            {id: "38", name: "Pizza Frutti di Mare", price: 14.50},
            {id: "39", name: "Pizza Capri", price: 14.00},
            {id: "40", name: "Pizza Melanzane", price: 15.50},
            {id: "41", name: "Pizza Chef", price: 15.50},
            {id: "42", name: "Pizza Salmone", price: 16.50},
            {id: "43", name: "Pizza Parma", price: 16.50},
            {id: "44", name: "Pizza Salvatore", price: 16.50},
            {id: "45", name: "Pizza Pollo", price: 16.50},
            {id: "46", name: "Pizza Amsterdam", price: 17.50},
            {id: "47", name: "Pizza Chiara", price: 18.50}
        ],
        "SPECIAL PIZZA": [
            {id: "51", name: "Pizza Asparagi", price: 17.50},
            {id: "52", name: "Pizza Gorgonzola", price: 16.50},
            {id: "53", name: "Pizza Salsiccia", price: 17.50},
            {id: "54", name: "Pizza di Capra", price: 18.00}
        ],
        "PASTA": [
            {id: "61", name: "Spaghetti Napoli", price: 12.00},
            {id: "62", name: "Spaghetti Bolgn.", price: 15.50},
            {id: "63", name: "Spagh. Aglio Olio", price: 12.00},
            {id: "64", name: "Spagh. Carbonara", price: 16.50},
            {id: "65", name: "Tortell. Panna/Pros", price: 15.50},
            {id: "66", name: "Penne Arrabbiata", price: 13.00},
            {id: "67", name: "Penne Amatriciana", price: 16.50},
            {id: "68", name: "Rigatoni Gorgonz.", price: 15.50},
            {id: "69", name: "Rigatoni Norcina", price: 16.50},
            {id: "70", name: "Rigatoni 4 Form.", price: 15.50},
            {id: "71", name: "Tagliatelle Salmone", price: 19.50},
            {id: "72", name: "Tagliatelle Scampi", price: 19.50},
            {id: "73", name: "Tagliatelle Manzo", price: 20.50}
        ],
        "FISCH/FLEISCH": [
            {id: "120", name: "Salmone Griglia", price: 25.50},
            {id: "121", name: "Salmone Basilico", price: 26.50},
            {id: "F1", name: "Calamari Fritti", price: 20.00},
            {id: "F2", name: "Calamari Griglia", price: 25.50},
            {id: "F3", name: "Pesce Misto", price: 35.50},
            {id: "113", name: "Schnitzel Wiener", price: 15.50},
            {id: "114", name: "Paprikaschnitzel", price: 18.50},
            {id: "115", name: "Jägerschnitzel", price: 18.50},
            {id: "116", name: "Schnitzel Funghi", price: 18.50},
            {id: "117", name: "Schnitzel Holl.", price: 18.50},
            {id: "118", name: "Zwiebelschnitzel", price: 18.50},
            {id: "R1", name: "Rinderfilet Grill", price: 30.50},
            {id: "R2", name: "Rinderfilet Funghi", price: 35.50},
            {id: "R3", name: "Rumpsteak 200g", price: 25.50},
            {id: "R4", name: "Rumpsteak 300g", price: 27.50}
        ],
        "DESSERT": [
            {id: "140", name: "Tiramisu", price: 8.00},
            {id: "141", name: "Tartufo Eis", price: 7.00},
            {id: "142", name: "Cassata", price: 7.00},
            {id: "143", name: "Schoko Soufflé", price: 8.50}
        ]
    },
    "VEGAN": {
        "ANTIPASTI": [
            {id: "201", name: "V. Pizzabrötchen", price: 5.50},
            {id: "202", name: "V. Focaccia", price: 6.50},
            {id: "203", name: "V. Bruschetta", price: 8.50},
            {id: "204", name: "V. Antipasto Veg.", price: 11.50}
        ],
        "PIZZA": [
            {id: "220", name: "V. Pizza Primavera", price: 12.00},
            {id: "221", name: "V. Pizza Margher.", price: 12.50},
            {id: "222", name: "V. Pizza Salami", price: 14.50},
            {id: "223", name: "V. Pizza Prosc.", price: 14.50},
            {id: "224", name: "V. Pizza Funghi", price: 14.00},
            {id: "225", name: "V. Pizza Spinaci", price: 14.00},
            {id: "226", name: "V. Pizza Tonno", price: 15.50},
            {id: "227", name: "V. Pizza Hawaii", price: 15.50},
            {id: "228", name: "V. Pizza Pros/Fun.", price: 16.00},
            {id: "231", name: "V. Pizza Verdura", price: 16.50},
            {id: "232", name: "V. Pizza 4 Stag.", price: 18.50},
            {id: "239", name: "V. Pizza Amsterdam", price: 20.50}
        ],
        "PASTA": [
            {id: "250", name: "V. Spagh. Napoli", price: 13.50},
            {id: "253", name: "V. Spagh. Bolog.", price: 18.50},
            {id: "255", name: "V. Tagl. Panna", price: 18.50},
            {id: "258", name: "V. Tagl. Salmone", price: 20.50},
            {id: "259", name: "V. Tagl. Manzo", price: 20.50}
        ],
        "DESSERT": [
            {id: "301", name: "V. Cheesecake", price: 8.50},
            {id: "302", name: "V. Möhrenkuchen", price: 5.50},
            {id: "303", name: "V. Schokokuchen", price: 5.50},
            {id: "304", name: "V. Tiramisu", price: 8.50}
        ]
    }
};

// LOGIC FUNCTIONS
function selectMode(mode) {
    currentMode = mode;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'flex';
    document.getElementById('mode-label').innerText = mode;
    renderTables();
}

function renderTables() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        grid.innerHTML += `<button class="t-btn" onclick="openOrder(${i})">TISCH ${i}</button>`;
    }
}

function openOrder(tableNum) {
    currentTable = tableNum;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('table-label').innerHTML = `<h3 style="margin:10px; color:#D4AF37">${currentMode} - T${tableNum}</h3>`;
    showHub();
}

function showHub() {
    document.getElementById('sub-nav').style.display = 'none';
    document.getElementById('menu-display').innerHTML = `
        <div class="hub-container">
            <button class="gold-box" onclick="openCategory('ESSEN')">ESSEN</button>
            <button class="gold-box" onclick="openCategory('GETRÄNKE')">GETRÄNKE</button>
            <button class="gold-box" onclick="openCategory('VEGAN')">VEGAN</button>
        </div>`;
}

function openCategory(cat) {
    const nav = document.getElementById('sub-nav');
    nav.style.display = 'flex';
    nav.innerHTML = `<button onclick="showHub()" class="sub-btn" style="background:#D4AF37; color:black">← BACK</button>`;
    Object.keys(megaMenu[cat]).forEach(sub => {
        nav.innerHTML += `<button class="sub-btn" onclick="renderItems('${cat}','${sub}')">${sub}</button>`;
    });
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[cat][sub].map(item => `
        <div class="item-row" onclick="addItem('${item.name}', ${item.price})">
            <div><span class="item-id">${item.id}</span> <b>${item.name}</b></div>
            <div class="gold">${item.price.toFixed(2)}€</div>
        </div>
    `).join('');
}

function addItem(name, price) {
    const key = `${currentMode}-${currentTable}`;
    if (!orders[key]) orders[key] = [];
    orders[key].push({name, price});
    updateReceipt();
}

function updateReceipt() {
    const key = `${currentMode}-${currentTable}`;
    const items = orders[key] || [];
    const total = items.reduce((a, b) => a + b.price, 0);
    document.getElementById('order-list').innerHTML = items.map((it, idx) => `
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; padding:4px 0; border-bottom:1px solid #222;">
            <span>${it.name}</span>
            <span>${it.price.toFixed(2)} <button onclick="removeItem(${idx})" style="background:red; color:white; border:none; border-radius:3px; cursor:pointer;">×</button></span>
        </div>`).join('');
    document.getElementById('total-val').innerText = total.toFixed(2) + " €";
}

function removeItem(idx) {
    const key = `${currentMode}-${currentTable}`;
    orders[key].splice(idx, 1);
    updateReceipt();
}

function completeOrder() {
    const key = `${currentMode}-${currentTable}`;
    const items = orders[key] || [];
    if (items.length === 0) return;
    const total = items.reduce((a, b) => a + b.price, 0);
    const taxRate = (currentMode === 'LIEFERUNG') ? 0.19 : 0.07;
    const tax = total - (total / (1 + taxRate));
    
    document.getElementById('menu-display').innerHTML = `
        <div class="receipt-paper">
            <center><b>SORRENTINO</b><br>RECHNUNG</center><br>
            TYP: ${currentMode} | TISCH: ${currentTable}<br>
            DATA: ${new Date().toLocaleString('de-DE')}<hr>
            ${items.map(i => `<div>${i.name} <span style="float:right">${i.price.toFixed(2)}</span></div>`).join('')}
            <hr><b>TOTAL <span style="float:right">${total.toFixed(2)} EUR</span></b><br>
            MwSt (${taxRate*100}%): ${tax.toFixed(2)} EUR<hr>
            <center>VIELEN DANK!</center>
        </div>
        <button onclick="location.reload()" class="gold-box" style="margin-top:10px; width:100%">NEUER AUFTRAG</button>`;
}

function searchMenu() {
    let input = document.getElementById('main-search').value.toLowerCase();
    let rows = document.getElementsByClassName('item-row');
    for (let r of rows) r.style.display = r.innerText.toLowerCase().includes(input) ? "flex" : "none";
}

function showStart() { location.reload(); }
function showTables() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'flex';
}
