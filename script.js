 const megaMenu = {
    "ESSEN": {
        "Antipasti": [
            {name:"Bruschetta",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio",price:14.00},{name:"Antipasto Ital.",price:24.50}
        ],
        "Pizza": [
            {name:"Margherita",price:10.50},{name:"Salami",price:12.00},{name:"Prosciutto",price:12.00},{name:"Funghi",price:12.00},{name:"Tonno",price:13.50},{name:"Hawaii",price:13.00},{name:"Verdura",price:14.50},{name:"4 Formaggi",price:14.50},{name:"Parma",price:16.50},{name:"Amsterdam",price:17.50},{name:"Calzone",price:15.00}
        ],
        "Pasta": [
            {name:"Spagh. Napoli",price:12.00},{name:"Bolognese",price:15.50},{name:"Carbonara",price:16.50},{name:"Rigatoni Norcina",price:16.50},{name:"Lasagne",price:16.50}
        ],
        "Fleisch/Fisch": [
            {name:"Schnitzel",price:15.50},{name:"Jägerschnitzel",price:18.50},{name:"Rumpsteak",price:25.50},{name:"Salmone",price:25.50}
        ]
    },
    "GETRÄNKE": {
        "Softdrinks": [
            {name:"S.Pelleg 0.25l",price:3.00},{name:"S.Pelleg 0.75l",price:7.50},{name:"Cola 0.33l",price:3.50},{name:"VIO Apfel",price:4.00},{name:"VIO Rhabarber",price:4.00},{name:"Fassbrause",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger",price:4.00},{name:"Weizen 0.5l",price:6.00}
        ],
        "Wein/Spirit": [
            {name:"Pinot Grigio",price:6.50},{name:"Primitivo",price:7.50},{name:"Ramazzotti",price:6.00},{name:"Grappa Haus",price:5.00}
        ]
    },
    "VEGAN": {
        "V-Pizza": [
            {name:"V. Margherita",price:12.50},{name:"V. Salami",price:14.50},{name:"V. Verdura",price:16.50},{name:"V. Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Napoli",price:13.50},{name:"V. Bolognese",price:18.50},{name:"V. Norcina",price:19.50}
        ],
        "V-Special": [
            {name:"V. Schnitzel",price:17.00},{name:"V. Jäger",price:19.50}
        ]
    }
};

let activeTable = null;
let orders = {};

function renderTables() {
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const isOcc = orders[i] && orders[i].length > 0;
        grid.innerHTML += `<button class="t-btn ${isOcc?'occupied':''}" onclick="openTable(${i})">TISCH ${i}</button>`;
    }
}

function openTable(num) {
    activeTable = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('current-tisch-title').innerText = "TISCH " + num;
    showHub();
    updateOrderSidebar();
}

function showHub() {
    document.getElementById('sub-nav').style.display = 'none';
    const display = document.getElementById('menu-display');
    display.innerHTML = `
        <div class="hub-container">
            <button class="gold-box" onclick="openMainCat('ESSEN')">ESSEN</button>
            <button class="gold-box" onclick="openMainCat('GETRÄNKE')">GETRÄNKE</button>
            <button class="gold-box" onclick="openMainCat('VEGAN')">VEGAN</button>
        </div>`;
}

function openMainCat(cat) {
    const nav = document.getElementById('sub-nav');
    nav.style.display = 'flex';
    nav.innerHTML = `<button class="nav-back" onclick="showHub()">←</button>`;
    Object.keys(megaMenu[cat]).forEach(sub => {
        nav.innerHTML += `<button class="sub-btn" onclick="renderItems('${cat}','${sub}')">${sub}</button>`;
    });
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[cat][sub].map(item => `
        <div class="item-card" onclick="addToOrder('${item.name}', ${item.price})">
            <b>${item.name}</b><br><span class="gold-text">${item.price.toFixed(2)}€</span>
        </div>
    `).join('');
}

function addToOrder(name, price) {
    if(!orders[activeTable]) orders[activeTable] = [];
    orders[activeTable].push({name, price});
    updateOrderSidebar();
}

function updateOrderSidebar() {
    const order = orders[activeTable] || [];
    const list = document.getElementById('order-list');
    list.innerHTML = order.map((item, idx) => `
        <div class="order-item"><span>${item.name}</span><span>${item.price.toFixed(2)}€</span></div>
    `).join('');
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-sum').innerText = total.toFixed(2) + " €";
    document.getElementById('mobile-total').innerText = total.toFixed(2) + " €";
}

renderTables();
