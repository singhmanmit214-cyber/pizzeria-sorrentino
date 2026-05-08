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
        "GRAPPA": [
            {id: "G1", name: "Grappa Riserva 2cl", price: 6.00},
            {id: "G2", name: "Sarpa Oro 2cl", price: 8.00}
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
            {id: "3", name: "Carpaccio Manzo", price: 14.00},
            {id: "4", name: "Carpaccio Pesce", price: 14.50},
            {id: "5", name: "Antipasto Ital.", price: 24.50},
            {id: "6", name: "Antipasto Veg.", price: 11.50},
            {id: "7", name: "Ziegenkäse", price: 15.50}
        ],
        "INSALATE": [
            {id: "10", name: "Mista", price: 9.00},
            {id: "11", name: "Pomodoro", price: 7.50},
            {id: "12", name: "Rucola", price: 10.50},
            {id: "13", name: "Contadina", price: 12.50},
            {id: "14", name: "Pollo", price: 12.50},
            {id: "15", name: "Salmone", price: 15.50},
            {id: "16", name: "Capricciosa", price: 14.50}
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
        "SPECIAL PIZZA": [
            {id: "51", name: "Asparagi", price: 17.50},
            {id: "52", name: "Gorgonzola", price: 16.50},
            {id: "53", name: "Salsiccia", price: 17.50},
            {id: "54", name: "Di Capra", price: 18.00}
        ],
        "PASTA": [
            {id: "61", name: "Spagh. Napoli", price: 12.00},
            {id: "62", name: "Spagh. Bolognese", price: 15.50},
            {id: "63", name: "Spagh. Aglio Olio", price: 12.00},
            {id: "64", name: "Spagh. Carbonara", price: 16.50},
            {id: "65", name: "Tortellini Panna", price: 15.50},
            {id: "66", name: "Penne Arrabbiata", price: 13.00},
            {id: "67", name: "Penne Amatric.", price: 16.50},
            {id: "68", name: "Rigatoni Gorgon.", price: 15.50},
            {id: "69", name: "Rigatoni Norcina", price: 16.50},
            {id: "70", name: "Rigatoni 4 Form.", price: 15.50},
            {id: "71", name: "Tagl. Salmone", price: 19.50},
            {id: "72", name: "Tagl. Scampi", price: 19.50},
            {id: "73", name: "Tagl. Manzo", price: 20.50}
        ],
        "AL FORNO": [
            {id: "100", name: "Lasagne", price: 16.50},
            {id: "101", name: "Tortellini Forno", price: 16.50},
            {id: "102", name: "Rigatoni Forno", price: 16.50},
            {id: "103", name: "Cannelloni", price: 17.50},
            {id: "104", name: "Auflauf Spezial", price: 17.50}
        ],
        "FISCH": [
            {id: "120", name: "Salmone Grill", price: 25.50},
            {id: "121", name: "Salmone Basil.", price: 26.50},
            {id: "F1", name: "Calamari Fritti", price: 20.00},
            {id: "F2", name: "Calamari Grill", price: 25.50},
            {id: "F3", name: "Pesce Misto", price: 35.50}
        ],
        "SCHNITZEL": [
            {id: "113", name: "Wiener Art", price: 15.50},
            {id: "114", name: "Paprikaschn.", price: 18.50},
            {id: "115", name: "Jägerschn.", price: 18.50},
            {id: "116", name: "Schn. Funghi", price: 18.50},
            {id: "117", name: "Schn. Hollan.", price: 18.50},
            {id: "118", name: "Zwiebelschn.", price: 18.50},
            {id: "B1", name: "Rinderfilet Grill", price: 30.50},
            {id: "B2", name: "Rinderfilet Funghi", price: 35.50},
            {id: "B3", name: "Rumpsteak 200g", price: 25.50},
            {id: "B4", name: "Rumpsteak 250g", price: 27.50}
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
            {id: "201", name: "V. Pizzabröt.", price: 5.50},
            {id: "202", name: "V. Focaccia", price: 6.50},
            {id: "203", name: "V. Bruschetta", price: 8.50},
            {id: "204", name: "V. Antip. Veg.", price: 11.50},
            {id: "205", name: "V. Ziegenkäse", price: 15.50}
        ],
        "PIZZA": [
            {id: "220", name: "V. Primavera", price: 12.00},
            {id: "221", name: "V. Margherita", price: 12.50},
            {id: "222", name: "V. Salami", price: 14.50},
            {id: "223", name: "V. Prosciutto", price: 14.50},
            {id: "224", name: "V. Funghi", price: 14.00},
            {id: "225", name: "V. Spinaci Norm.", price: 14.00},
            {id: "226", name: "V. Tonno", price: 15.50},
            {id: "227", name: "V. Hawaii", price: 15.50},
            {id: "228", name: "V. Prosc. Funghi", price: 16.00},
            {id: "229", name: "V. Carciofi", price: 16.50},
            {id: "230", name: "V. Spinaci Ext.", price: 16.50},
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
            {id: "250", name: "V. Spagh. Nap.", price: 13.50},
            {id: "251", name: "V. Aglio Olio", price: 13.50},
            {id: "252", name: "V. Penne Arrab.", price: 14.50},
            {id: "253", name: "V. Spagh. Bol.", price: 18.50},
            {id: "254", name: "V. Penne Amatr.", price: 18.50},
            {id: "255", name: "V. Tagl. Panna", price: 18.50},
            {id: "256", name: "V. Penne Tonno", price: 18.50},
            {id: "257", name: "V. Rig. Norcina", price: 19.50},
            {id: "258", name: "V. Tagl. Salm.", price: 20.50},
            {id: "259", name: "V. Tagl. Manzo", price: 20.50}
        ],
        "AL FORNO": [
            {id: "269", name: "V. Tort. Forno", price: 18.50},
            {id: "270", name: "V. Rig. Forno", price: 18.50},
            {id: "271", name: "V. Lasagne", price: 19.50},
            {id: "272", name: "V. Cannelloni", price: 19.50},
            {id: "273", name: "V. Auflauf Sp.", price: 20.50}
        ],
        "DESSERT": [
            {id: "301", name: "V. Cheesecake", price: 8.50},
            {id: "302", name: "V. Möhrenkuchen", price: 5.50},
            {id: "303", name: "V. Schokokuchen", price: 5.50},
            {id: "304", name: "V. Tiramisu", price: 8.50}
        ]
    }
};

// 1. SELECT MODE
function selectMode(mode) {
    currentMode = mode;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('mode-label').innerText = mode;
    renderTables();
}

// 2. RENDER 15 TABLES
function renderTables() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const btn = document.createElement('button');
        btn.className = 't-btn';
        btn.innerText = `TISCH ${i}`;
        btn.onclick = () => openOrder(i);
        grid.appendChild(btn);
    }
}

// 3. OPEN POS
function openOrder(tableNum) {
    currentTable = tableNum;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
    document.querySelectorAll('.table-number').forEach(el => el.innerText = tableNum);
    openCategory('ESSEN');
}

// 4. CATEGORY LOGIC
function openCategory(cat) {
    // Styling Active Buttons
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    
    const nav = document.getElementById('sub-nav');
    nav.innerHTML = '';
    
    const subs = Object.keys(megaMenu[cat]);
    subs.forEach(sub => {
        const b = document.createElement('button');
        b.className = 'sub-tab-btn';
        b.innerText = sub;
        b.onclick = () => renderItems(cat, sub);
        nav.appendChild(b);
    });
    
    renderItems(cat, subs[0]);
}

// 5. ITEM RENDER (SCROLL FIX)
function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.scrollTop = 0; // Fixes the "can't move left/down" feel
    
    display.innerHTML = megaMenu[cat][sub].map(it => `
        <div class="item-card" onclick="addItem('${it.name}', ${it.price})">
            <div class="item-info">
                <span class="gold-id">${it.id}</span>
                <span class="item-name">${it.name}</span>
            </div>
            <div class="item-price">${it.price.toFixed(2)} €</div>
        </div>
    `).join('');
}

// 6. ORDER MGMT
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
        <div class="receipt-row">
            <span>${it.name}</span>
            <span>${it.price.toFixed(2)}€ <button onclick="removeItem(${idx})" class="del-btn">×</button></span>
        </div>
    `).join('');
    
    document.getElementById('total-val').innerText = total.toFixed(2) + " €";
}

function removeItem(idx) {
    const key = `${currentMode}-${currentTable}`;
    orders[key].splice(idx, 1);
    updateReceipt();
}

// 7. TAX & FINISH
function completeOrder() {
    const key = `${currentMode}-${currentTable}`;
    const items = orders[key] || [];
    if (!items.length) return;

    const total = items.reduce((a, b) => a + b.price, 0);
    const taxRate = (currentMode === 'LIEFERUNG') ? 0.19 : 0.07;
    const taxVal = total - (total / (1 + taxRate));

    alert(`Gesamt: ${total.toFixed(2)}€\nInkl. MwSt (${taxRate*100}%): ${taxVal.toFixed(2)}€`);
    location.reload();
}

// 8. SEARCH
function searchMenu() {
    let input = document.querySelector('.search-sticky input').value.toLowerCase();
    let cards = document.getElementsByClassName('item-card');
    for (let c of cards) {
        c.style.display = c.innerText.toLowerCase().includes(input) ? "flex" : "none";
    }
}

window.onload = renderTables;
