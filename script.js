 let currentMode = "";
let currentTable = null;
let orders = {};

const megaMenu = {
    "GETRÄNKE": {
        "ALKOHOLFREI": [
            {id: "D1", name: "S. Pellegrino 0,25l", price: 3.00},
            {id: "D2", name: "S. Pellegrino 0,75l", price: 7.50},
            {id: "D3", name: "Aqua Panna 0,25l", price: 3.00},
            {id: "D4", name: "Aqua Panna 0,75l", price: 7.50},
            {id: "D5", name: "Coca Cola 0,20l", price: 3.00},
            {id: "D6", name: "Coca Cola 0,33l", price: 3.50},
            {id: "D7", name: "Cola Zero 0,20l", price: 3.00},
            {id: "D8", name: "Cola Zero 0,33l", price: 3.50},
            {id: "D9", name: "Fanta 0,20l", price: 3.00},
            {id: "D10", name: "Fanta 0,33l", price: 3.50},
            {id: "D11", name: "Sprite 0,20l", price: 3.00},
            {id: "D12", name: "Sprite 0,33l", price: 3.50},
            {id: "D13", name: "Mezzo Mix 0,20l", price: 3.00},
            {id: "D14", name: "Mezzo Mix 0,33l", price: 3.50},
            {id: "D15", name: "Apfelschorle 0,20l", price: 3.00},
            {id: "D16", name: "Apfelschorle 0,33l", price: 3.50},
            {id: "D17", name: "Orangensaft 0,20l", price: 3.00},
            {id: "D18", name: "Orangensaft 0,33l", price: 3.50},
            {id: "D19", name: "Fassbrause 0,33l", price: 4.00},
            {id: "D20", name: "Vio Zitrone 0,33l", price: 4.00},
            {id: "D21", name: "Vio Rhabarber 0,33l", price: 4.00},
            {id: "D22", name: "Vio Johannisbeere 0,33l", price: 4.00},
            {id: "D23", name: "Vio Apfelschorle 0,33l", price: 4.00},
            {id: "D24", name: "Vio Orangensaft 0,33l", price: 4.00}
        ],
        "APERITIFS": [
            {id: "A1", name: "Prosecco 0,1l", price: 6.00},
            {id: "A2", name: "Aperol Spritz 0,2l", price: 7.50},
            {id: "A3", name: "Martini Blanco 0,1l", price: 6.50},
            {id: "A4", name: "Gin Tonic 0,2l", price: 8.50},
            {id: "A5", name: "Campari Soda 0,2l", price: 6.50},
            {id: "A6", name: "Campari Orange 0,2l", price: 7.50},
            {id: "A7", name: "Limoncello Spritz 0,2l", price: 7.50},
            {id: "A8", name: "Lillet 0,2l", price: 7.50},
            {id: "A9", name: "Mojito 0,2l", price: 9.50}
        ],
        "BIER": [
            {id: "B1", name: "Kölsch 0,2l", price: 3.00},
            {id: "B2", name: "Kölsch 0,3l", price: 3.50},
            {id: "B3", name: "Pils 0,3l", price: 4.00},
            {id: "B4", name: "Jever 0,3l", price: 4.00},
            {id: "B5", name: "Jever Fun (AF) 0,3l", price: 4.00},
            {id: "B6", name: "Weizenbier 0,5l", price: 6.00},
            {id: "B7", name: "Weizenbier (AF) 0,5l", price: 6.00},
            {id: "B8", name: "Malzbier 0,33l", price: 4.00}
        ],
        "VINO BIANCO": [
            {id: "W1", name: "Pinot Grigio 0,2l", price: 6.50},
            {id: "W2", name: "Pinot Grigio 0,5l", price: 14.00},
            {id: "W3", name: "Pinot Grigio 1,0l", price: 26.00}
        ],
        "VINO ROSÉ": [
            {id: "R1", name: "Spineli Rosato 0,2l", price: 6.50},
            {id: "R2", name: "Spineli Rosato 0,5l", price: 14.00},
            {id: "R3", name: "Spineli Rosato 1,0l", price: 26.00}
        ],
        "VINO ROSSO": [
            {id: "RO1", name: "Montepulciano 0,2l", price: 6.50},
            {id: "RO2", name: "Montepulciano 0,5l", price: 14.00},
            {id: "RO3", name: "Montepulciano 1,0l", price: 26.00},
            {id: "RO4", name: "Lambrusco 0,2l", price: 6.50},
            {id: "RO5", name: "Lambrusco 0,5l", price: 14.00},
            {id: "RO6", name: "Lambrusco 1,0l", price: 26.00}
        ],
        "SPIRITUOSEN": [
            {id: "S1", name: "Ramazotti 4cl", price: 6.00},
            {id: "S2", name: "Averna 4cl", price: 6.00},
            {id: "S3", name: "Montenegro 4cl", price: 6.00},
            {id: "S4", name: "Fernet Branca 4cl", price: 6.00},
            {id: "S5", name: "Sambuca 4cl", price: 6.00},
            {id: "S6", name: "Limoncello 4cl", price: 5.00},
            {id: "S7", name: "Vecchia Romanga 4cl", price: 6.00},
            {id: "S8", name: "Red Label 4cl", price: 7.00},
            {id: "S9", name: "Black Label 4cl", price: 8.50},
            {id: "S10", name: "Jack Daniels 4cl", price: 8.00},
            {id: "S11", name: "Wodka 4cl", price: 6.50},
            {id: "S12", name: "Disaronno 4cl", price: 6.00},
            {id: "S13", name: "Tequila 4cl", price: 6.00},
            {id: "S14", name: "Gin 4cl", price: 6.00}
        ],
        "HEISSE GETRÄNKE": [
            {id: "H1", name: "Espresso", price: 2.50},
            {id: "H2", name: "Kaffee", price: 3.00},
            {id: "H3", name: "Cappuccino", price: 3.50},
            {id: "H4", name: "Milchkaffee", price: 3.50},
            {id: "H5", name: "Latte Macchiato", price: 4.00},
            {id: "H6", name: "Tee", price: 2.00}
        ]
    },
    "ESSEN": {
        "ANTIPASTI": [
            {id: "1", name: "Bruschetta Clasic", price: 8.50},
            {id: "1a", name: "Focaccia", price: 6.50},
            {id: "PB", name: "Pizzabrötchen", price: 5.50},
            {id: "2", name: "Caprese", price: 12.50},
            {id: "3", name: "Carpaccio di Manzo", price: 14.00},
            {id: "4", name: "Carpaccio di Pesce", price: 14.50},
            {id: "5", name: "Antipasto Italiano", price: 24.50},
            {id: "6", name: "Antipasto Vegetale", price: 11.50},
            {id: "7", name: "Ziegenkäse", price: 15.50}
        ],
        "INSALATE": [
            {id: "10", name: "Insalata Mista", price: 9.00},
            {id: "11", name: "Insalata Pomodoro", price: 7.50},
            {id: "12", name: "Insalata Rucola", price: 10.50},
            {id: "13", name: "Insalata Contadina", price: 12.50},
            {id: "14", name: "Insalata Pollo", price: 12.50},
            {id: "15", name: "Insalata Salmone", price: 15.50},
            {id: "16", name: "Insalata Capricciosa", price: 14.50}
        ],
        "PIZZA": [
            {id: "20", name: "Margherita", price: 10.50},
            {id: "21", name: "Bufalina", price: 12.00},
            {id: "22", name: "Primavera", price: 12.00},
            {id: "23", name: "Salami", price: 12.00},
            {id: "24", name: "Prosciutto", price: 12.00},
            {id: "25", name: "Funghi", price: 12.00},
            {id: "26", name: "Pugliese", price: 14.00},
            {id: "27", name: "Inferno", price: 13.00},
            {id: "28", name: "Spinaci", price: 12.00},
            {id: "29", name: "Prosc. e Funghi", price: 13.50},
            {id: "30", name: "Tonno", price: 13.50},
            {id: "31", name: "Hawaii", price: 13.00},
            {id: "32", name: "Verdura", price: 14.50},
            {id: "33", name: "4 Stagioni", price: 14.50},
            {id: "34", name: "4 Formaggi", price: 14.50},
            {id: "35", name: "Carciofi", price: 14.50},
            {id: "36", name: "Calzone", price: 15.00},
            {id: "37", name: "Rustica", price: 14.50},
            {id: "38", name: "Frutti di Mare", price: 14.50},
            {id: "39", name: "Capri", price: 14.00},
            {id: "40", name: "Melanzane", price: 15.50},
            {id: "41", name: "Chef", price: 15.50},
            {id: "42", name: "Salmone", price: 16.50},
            {id: "43", name: "Parma", price: 16.50},
            {id: "44", name: "Salvatore", price: 16.50},
            {id: "45", name: "Pollo", price: 16.50},
            {id: "46", name: "Amsterdam", price: 17.50},
            {id: "47", name: "Chiara", price: 18.50}
        ],
        "PASTA": [
            {id: "61", name: "Spaghetti Napoli", price: 12.00},
            {id: "62", name: "Spaghetti Bolognese", price: 15.50},
            {id: "63", name: "Spaghetti Aglio Olio", price: 12.00},
            {id: "64", name: "Spaghetti Carbonara", price: 16.50},
            {id: "65", name: "Tortellini Panna", price: 15.50},
            {id: "66", name: "Penne Arrabbiata", price: 13.00},
            {id: "67", name: "Penne Amatriciana", price: 16.50},
            {id: "68", name: "Rigatoni Gorgonzola", price: 15.50},
            {id: "69", name: "Rigatoni Norcina", price: 16.50},
            {id: "70", name: "Rigatoni 4 Formaggi", price: 15.50},
            {id: "71", name: "Tagliatelle Salmone", price: 19.50},
            {id: "72", name: "Tagliatelle Scampi", price: 19.50},
            {id: "73", name: "Tagliatelle Manzo", price: 20.50}
        ],
        "AL FORNO": [
            {id: "100", name: "Lasagne", price: 16.50},
            {id: "101", name: "Tortellini al Forno", price: 16.50},
            {id: "102", name: "Rigatoni al Forno", price: 16.50},
            {id: "103", name: "Cannelloni", price: 17.50},
            {id: "104", name: "Auflauf Spezial", price: 17.50}
        ],
        "FISCH": [
            {id: "120", name: "Salmone Griglia", price: 25.50},
            {id: "121", name: "Salmone Basilico", price: 26.50},
            {id: "122", name: "Calamari Fritti", price: 20.00},
            {id: "123", name: "Calamari Griglia", price: 25.50},
            {id: "124", name: "Pesce Misto", price: 35.50}
        ],
        "SCHNITZEL/FLEISCH": [
            {id: "113", name: "Wiener Art", price: 15.50},
            {id: "114", name: "Paprikaschnitzel", price: 18.50},
            {id: "115", name: "Jägerschnitzel", price: 18.50},
            {id: "116", name: "Schnitzel Funghi", price: 18.50},
            {id: "117", name: "Schnitzel Hollandaise", price: 18.50},
            {id: "118", name: "Zwiebelschnitzel", price: 18.50},
            {id: "F1", name: "Rinderfilet Grill", price: 30.50},
            {id: "F2", name: "Rinderfilet Funghi", price: 35.50},
            {id: "F3", name: "Rumpsteak 200g", price: 25.50},
            {id: "F4", name: "Rumpsteak 250g", price: 27.50}
        ],
        "SNACKS": [
            {id: "110", name: "Pommes Frites", price: 6.00},
            {id: "111", name: "Chicken Nuggets (6)", price: 8.50},
            {id: "112", name: "Chicken Nuggets (12)", price: 16.00}
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
            {id: "201", name: "Vegan Pizzabrötchen", price: 5.50},
            {id: "202", name: "Vegan Focaccia", price: 6.50},
            {id: "203", name: "Vegan Bruschetta", price: 8.50},
            {id: "204", name: "Vegan Antip. Vegetale", price: 11.50},
            {id: "205", name: "Vegan Ziegenkäse", price: 15.50}
        ],
        "PIZZA": [
            {id: "220", name: "V. Primavera", price: 12.00},
            {id: "221", name: "V. Margherita", price: 12.50},
            {id: "222", name: "V. Salami", price: 14.50},
            {id: "223", name: "V. Prosciutto", price: 14.50},
            {id: "224", name: "V. Funghi", price: 14.00},
            {id: "225", name: "V. Spinaci Normal", price: 14.00},
            {id: "226", name: "V. Tonno", price: 15.50},
            {id: "227", name: "V. Hawaii", price: 15.50},
            {id: "228", name: "V. Prosc. e Funghi", price: 16.00},
            {id: "229", name: "V. Carciofi", price: 16.50},
            {id: "230", name: "V. Spinaci Extra", price: 16.50},
            {id: "231", name: "V. Verdura", price: 16.50},
            {id: "232", name: "V. 4 Stagioni", price: 18.50},
            {id: "233", name: "V. Calzone", price: 18.50},
            {id: "234", name: "V. Rustica", price: 18.50},
            {id: "235", name: "V. Melanzane", price: 18.50},
            {id: "236", name: "V. Salmone", price: 18.50},
            {id: "237", name: "V. Asparagi", price: 19.50},
            {id: "238", name: "V. Pollo", price: 19.50},
            {id: "239", name: "V. Amsterdam", price: 20.50}
        ],
        "PASTA": [
            {id: "250", name: "V. Spagh. Napoli", price: 13.50},
            {id: "251", name: "V. Spagh. Aglio Olio", price: 13.50},
            {id: "252", name: "V. Penne Arrabbiata", price: 14.50},
            {id: "253", name: "V. Spagh. Bolognese", price: 18.50},
            {id: "254", name: "V. Penne Amatriciana", price: 18.50},
            {id: "255", name: "V. Tagliatelle Panna", price: 18.50},
            {id: "256", name: "V. Penne Tonno", price: 18.50},
            {id: "257", name: "V. Rigatoni Norcina", price: 19.50},
            {id: "258", name: "V. Tagliatelle Salmone", price: 20.50},
            {id: "259", name: "V. Tagliatelle Manzo", price: 20.50}
        ],
        "AL FORNO": [
            {id: "269", name: "V. Tortellini al Forno", price: 18.50},
            {id: "270", name: "V. Rigatoni al Forno", price: 18.50},
            {id: "271", name: "V. Lasagne", price: 19.50},
            {id: "272", name: "V. Cannelloni", price: 19.50},
            {id: "273", name: "V. Auflauf Spezial", price: 20.50}
        ],
        "SCHNITZEL": [
            {id: "290", name: "V. Wiener Art", price: 17.00},
            {id: "291", name: "V. Jägerschnitzel", price: 19.50},
            {id: "292", name: "V. Schnitzel Funghi", price: 19.50},
            {id: "293", name: "V. Schnitzel Hollan.", price: 19.50},
            {id: "294", name: "V. Zwiebelschnitzel", price: 19.50}
        ],
        "DESSERT": [
            {id: "301", name: "V. Cheesecake Himbeere", price: 8.50},
            {id: "302", name: "V. Möhrenkuchen", price: 5.50},
            {id: "303", name: "V. Schokokuchen", price: 5.50},
            {id: "304", name: "V. Tiramisu", price: 8.50}
        ]
    }
};

// INITIALIZATION FUNCTIONS
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
    document.querySelectorAll('.table-number').forEach(el => el.innerText = 'T' + tableNum);
    openCategory('ESSEN'); 
}

function openCategory(cat) {
    // Reset selection styles
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    
    const nav = document.getElementById('sub-nav');
    nav.innerHTML = ''; 
    
    const subCats = Object.keys(megaMenu[cat]);
    subCats.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'sub-tab-btn';
        btn.innerText = sub;
        btn.onclick = () => renderItems(cat, sub);
        nav.appendChild(btn);
    });

    renderItems(cat, subCats[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    // FIXED: Always scroll to top when changing category
    display.scrollTop = 0; 
    
    display.innerHTML = megaMenu[cat][sub].map(item => `
        <div class="item-card" onclick="addItem('${item.name}', ${item.price})">
            <div class="item-info">
                <span class="gold-id">${item.id}</span>
                <span class="item-name">${item.name}</span>
            </div>
            <div class="item-price">${item.price.toFixed(2)} €</div>
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
    
    const list = document.getElementById('order-list');
    list.innerHTML = items.map((it, idx) => `
        <div class="receipt-row" style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid #222; padding-bottom:5px;">
            <span>${it.name}</span>
            <span>${it.price.toFixed(2)}€ <button onclick="removeItem(${idx})" style="background:red; color:white; border:none; border-radius:50%; width:20px; height:20px; cursor:pointer;">×</button></span>
        </div>
    `).join('');
    
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
    const taxValue = total - (total / (1 + taxRate));

    document.getElementById('menu-display').innerHTML = `
        <div style="background:white; color:black; padding:20px; font-family:monospace; max-width:300px; margin:auto; border:1px solid #ccc;">
            <center><h3>SORRENTINO</h3></center>
            <p>Modus: ${currentMode} | Tisch: ${currentTable}</p>
            <hr>
            ${items.map(i => `<div style="display:flex; justify-content:space-between;"><span>${i.name}</span><span>${i.price.toFixed(2)}</span></div>`).join('')}
            <hr>
            <div style="display:flex; justify-content:space-between; font-weight:bold;"><span>GESAMT</span><span>${total.toFixed(2)} €</span></div>
            <p style="font-size:10px; margin-top:10px;">inkl. ${taxRate*100}% MwSt: ${taxValue.toFixed(2)} €</p>
        </div>
        <button onclick="location.reload()" style="width:100%; padding:20px; background:green; color:white; margin-top:20px; border:none; font-weight:bold;">NEUE BESTELLUNG</button>
    `;
}

function searchMenu() {
    let input = document.getElementById('main-search').value.toLowerCase();
    let cards = document.getElementsByClassName('item-card');
    for (let card of cards) {
        card.style.display = card.innerText.toLowerCase().includes(input) ? "flex" : "none";
    }
}
