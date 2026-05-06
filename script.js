 const megaMenu = {
    "ESSEN": {
        "Antipasti": [
            {name:"Bruschetta Classic", price:8.50}, {name:"Pizzabrötchen (8 Stk)", price:5.50}, {name:"Pizzabrötchen mit Käse", price:7.00},
            {name:"Focaccia Rosmarin", price:6.50}, {name:"Caprese", price:12.50}, {name:"Carpaccio di Manzo", price:14.50},
            {name:"Vitello Tonnato", price:14.50}, {name:"Antipasto Sorrentino", price:24.50}
        ],
        "Salate": [
            {name:"Insalata Mista", price:8.50}, {name:"Insalata Pomodoro", price:7.50}, {name:"Insalata Tonno", price:12.50}, 
            {name:"Insalata Pollo", price:14.50}, {name:"Insalata Rucola", price:12.00}, {name:"Insalata Gamberetti", price:15.50}
        ],
        "Pizza": [
            {name:"Margherita", price:10.50}, {name:"Salami", price:12.00}, {name:"Prosciutto", price:12.00}, 
            {name:"Funghi", price:12.00}, {name:"Tonno e Cipolla", price:13.50}, {name:"Hawaii", price:13.00},
            {name:"Spinaci", price:12.50}, {name:"Diavolo (Scharf)", price:13.50}, {name:"Calzone", price:14.00}
        ],
        "Special Pizza": [
            {name:"Salvatore", price:16.50}, {name:"Amsterdam", price:17.50}, {name:"Parma e Rucola", price:16.50}, 
            {name:"Bufalina", price:15.00}, {name:"Pizza Chef", price:18.00}, {name:"Frutti di Mare", price:16.50}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli", price:12.00}, {name:"Spaghetti Bolognese", price:15.50}, {name:"Spaghetti Carbonara", price:16.50}, 
            {name:"Spaghetti Aglio e Olio", price:11.50}, {name:"Rigatoni Norcina", price:16.50}, {name:"Penne Arrabbiata", price:13.00},
            {name:"Tagliatelle Salmone", price:17.50}, {name:"Gnocchi Gorgonzola", price:15.50}
        ],
        "Al Forno": [
            {name:"Lasagne al Forno", price:16.50}, {name:"Penne al Forno", price:15.50}, {name:"Cannelloni", price:16.00}, 
            {name:"Tortellini al Forno", price:16.50}
        ],
        "Snacks": [
            {name:"Pommes Frites", price:4.50}, {name:"Süßkartoffelpommes", price:6.00}, {name:"Oliven & Peperoni", price:4.50}, 
            {name:"Chicken Nuggets (6)", price:7.50}, {name:"Mozzarella Sticks (6)", price:7.50}, {name:"Calamari Fritti", price:14.50}
        ],
        "Dessert": [
            {name:"Tiramisu Classico", price:7.50}, {name:"Panna Cotta", price:6.50}, {name:"Tartufo Cioccolato", price:7.00}, 
            {name:"Soufflé al Cioccolato", price:8.50}, {name:"Gelato Misto", price:6.00}
        ]
    },
    "GETRÄNKE": {
        "ALKOHOLFREI": [
            {name:"S.Pelleg 0.25l", price:3.50}, {name:"S.Pelleg 0.75l", price:7.50}, {name:"Acqua Panna 0.25l", price:3.50},
            {name:"Acqua Panna 0.75l", price:7.50}, {name:"Coca Cola 0.33l", price:3.50}, {name:"Cola Zero 0.33l", price:3.50},
            {name:"Fanta 0.33l", price:3.50}, {name:"Sprite 0.33l", price:3.50}, {name:"VIO Schorle Apfel", price:4.00}, 
            {name:"VIO Schorle Rhabarber", price:4.00}, {name:"Fassbrause Zitrone", price:4.00}
        ],
        "APERITIFS": [
            {name:"Aperol Spritz", price:8.50}, {name:"Hugo", price:8.50}, {name:"Campari Soda", price:7.00}, 
            {name:"Lillet Wild Berry", price:8.50}, {name:"Martini Bianco", price:6.50}
        ],
        "BIER": [
            {name:"Kölsch 0.2l", price:3.00}, {name:"Kölsch 0.3l", price:3.50}, {name:"Bitburger Pils 0.33l", price:4.00}, 
            {name:"Weizenbier 0.5l", price:6.00}, {name:"Alkoholfreies Pils", price:4.00}, {name:"Weizen Alkoholfrei", price:6.00}
        ],
        "VINO BIANCO": [
            {name:"Pinot Grigio 0.2l", price:6.50}, {name:"Chardonnay 0.2l", price:7.50}, {name:"Lugana 0.2l", price:8.50}, 
            {name:"Flasche Pinot Grigio", price:24.00}
        ],
        "VINO ROSÉ": [
            {name:"Chiaretto 0.2l", price:6.50}, {name:"Rosato della Casa 0.2l", price:6.00}
        ],
        "VINO ROSSO": [
            {name:"Primitivo 0.2l", price:7.50}, {name:"Montepulciano 0.2l", price:6.50}, {name:"Chianti 0.2l", price:8.00}, 
            {name:"Flasche Primitivo", price:28.00}
        ],
        "SPIRITUOSEN": [
            {name:"Ramazzotti", price:6.00}, {name:"Averna", price:6.00}, {name:"Sambuca", price:5.00}, 
            {name:"Amaretto", price:5.00}, {name:"Limoncello", price:5.00}, {name:"Baileys", price:6.00}
        ],
        "GRAPPA": [
            {name:"Grappa Haus", price:5.00}, {name:"Grappa Riserva", price:8.50}, {name:"Grappa di Chardonnay", price:7.50}
        ],
        "HEISSE GETRÄNKE": [
            {name:"Espresso", price:3.00}, {name:"Espresso Macchiato", price:3.20}, {name:"Doppelter Espresso", price:4.50}, 
            {name:"Kaffee Crema", price:3.50}, {name:"Cappuccino", price:4.00}, {name:"Latte Macchiato", price:4.50}, {name:"Tee (Sorten)", price:3.50}
        ]
    },
    "VEGAN": {
        "Vegan Salad": [
            {name:"V. Insalata Mista", price:10.50}, {name:"V. Insalata Rucola", price:12.00}, {name:"V. Tomatensalat", price:9.50}
        ],
        "Vegan Pizza": [
            {name:"V. Margherita", price:12.50}, {name:"V. Funghi", price:14.00}, {name:"V. Verdura", price:16.50}, 
            {name:"V. Amsterdam", price:20.50}, {name:"V. Salami", price:15.00}
        ],
        "Vegan Pasta": [
            {name:"V. Spagh. Napoli", price:13.50}, {name:"V. Spagh. Bolognese", price:15.50}, {name:"V. Rigatoni Norcina", price:19.50}, 
            {name:"V. Penne Arrabbiata", price:14.50}
        ],
        "Vegan Al Forno": [
            {name:"V. Lasagne al Forno", price:18.50}, {name:"V. Penne al Forno", price:17.50}
        ],
        "Vegan Snacks": [
            {name:"V. Pizzabrötchen", price:6.50}, {name:"V. Bruschetta", price:9.50}, {name:"V. Pommes Frites", price:4.50}
        ],
        "Vegan Dessert": [
            {name:"V. Panna Cotta", price:7.50}, {name:"V. Schoko-Mousse", price:8.50}
        ]
    }
};

let activeTable = null;
let tableOrders = JSON.parse(localStorage.getItem('sorrentino_orders')) || {};

function saveOrders() {
    localStorage.setItem('sorrentino_orders', JSON.stringify(tableOrders));
}

function renderTables() {
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const hasOrder = tableOrders[i] && tableOrders[i].length > 0;
        grid.innerHTML += `<button class="t-btn ${hasOrder ? 'occupied' : ''}" onclick="openTable(${i})">TISCH ${i}</button>`;
    }
}

function openTable(num) {
    activeTable = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('current-tisch-label').innerText = "TISCH " + num;
    showHub();
    renderOrder();
}

function showHub() {
    document.getElementById('sub-nav').style.display = 'none';
    const display = document.getElementById('menu-display');
    display.innerHTML = `
        <div class="hub-container">
            <button class="gold-box-large" onclick="openCat('ESSEN')">ESSEN</button>
            <button class="gold-box-large" onclick="openCat('GETRÄNKE')">GETRÄNKE</button>
            <button class="gold-box-large" onclick="openCat('VEGAN')">VEGAN</button>
        </div>`;
}

function openCat(main) {
    const nav = document.getElementById('sub-nav');
    nav.style.display = 'flex';
    nav.innerHTML = `<button class="nav-back-btn" onclick="showHub()">←</button>`;
    Object.keys(megaMenu[main]).forEach(sub => {
        nav.innerHTML += `<button class="sub-nav-item" onclick="showItems('${main}','${sub}')">${sub}</button>`;
    });
    showItems(main, Object.keys(megaMenu[main])[0]);
}

function showItems(main, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[main][sub].map(item => `
        <div class="item-card" onclick="addToOrder('${item.name}', ${item.price})">
            <b>${item.name}</b><br><span class="gold-text">${item.price.toFixed(2)}€</span>
        </div>
    `).join('');
}

function addToOrder(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({ name, price });
    saveOrders();
    renderOrder();
}

function renderOrder() {
    const list = document.getElementById('order-list');
    const order = tableOrders[activeTable] || [];
    list.innerHTML = order.map((item, idx) => `
        <div class="order-row">
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)}€ <button onclick="removeItem(${idx})" class="del-btn">×</button></span>
        </div>
    `).join('');
    const total = order.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-amount').innerText = total.toFixed(2) + " €";
}

function removeItem(idx) {
    tableOrders[activeTable].splice(idx, 1);
    if(tableOrders[activeTable].length === 0) delete tableOrders[activeTable];
    saveOrders();
    renderOrder();
}

function printBon() {
    const order = tableOrders[activeTable] || [];
    if(order.length === 0) return alert("Tisch ist leer!");
    const total = order.reduce((s, i) => s + i.price, 0);
    const win = window.open('', '', 'width=400,height=600');
    win.document.write(`
        <div style="font-family:monospace; width:280px;">
            <center><h2>SORRENTINO</h2><p>Tisch ${activeTable} | ${new Date().toLocaleDateString()}</p></center>
            <hr style="border-top: 1px dashed black;">
            ${order.map(i => `<div style="display:flex;justify-content:space-between;margin:5px 0;"><span>${i.name}</span><span>${i.price.toFixed(2)}</span></div>`).join('')}
            <hr style="border-top: 1px dashed black;">
            <div style="display:flex;justify-content:space-between; font-size:18px;"><b>TOTAL</b><b>${total.toFixed(2)}€</b></div>
            <center><p style="margin-top:20px;">Grazie e Arrivederci!</p></center>
        </div>
    `);
    win.print();
}

renderTables();
