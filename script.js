 const megaMenu = {
    "FOOD": {
        "Antipasti": [
            {name:"Bruschetta Classic",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen (8 Stk)",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio di Manzo",price:14.00},{name:"Carpaccio di Pesce",price:14.50},{name:"Ziegenkäse",price:15.50},{name:"Antipasto Italiano",price:24.50},{name:"Antipasto Vegetale",price:11.50}
        ],
        "Insalate": [
            {name:"Insalata Mista",price:9.00},{name:"Insalata Pomodoro",price:7.50},{name:"Insalata Rucola",price:10.50},{name:"Insalata Contadina",price:12.50},{name:"Insalata Pollo",price:12.50},{name:"Insalata Salmone",price:15.50},{name:"Insalata Capricciosa",price:14.50}
        ],
        "Pizza": [
            {name:"Pizza Margherita",price:10.50},{name:"Pizza Bufalina",price:12.00},{name:"Pizza Primavera",price:12.00},{name:"Pizza Salami",price:12.00},{name:"Pizza Prosciutto",price:12.00},{name:"Pizza Funghi",price:12.00},{name:"Pizza Pugliese",price:14.00},{name:"Pizza Inferno",price:13.00},{name:"Pizza Spinaci",price:12.00},{name:"Pizza Prosc. e Funghi",price:13.50},{name:"Pizza Tonno",price:13.50},{name:"Pizza Hawaii",price:13.00},{name:"Pizza Verdura",price:14.50},{name:"Pizza Quattro Stagioni",price:14.50},{name:"Pizza Quattro Formaggi",price:14.50},{name:"Pizza Carciofi",price:14.50},{name:"Pizza Rustica",price:14.50},{name:"Pizza Frutti di Mare",price:14.50},{name:"Pizza Capri",price:14.00},{name:"Pizza Melanzane",price:15.50},{name:"Pizza Chef",price:15.50},{name:"Pizza Salmone",price:16.50},{name:"Pizza Parma",price:16.50},{name:"Pizza Salvatore",price:16.50},{name:"Pizza Pollo",price:16.50},{name:"Pizza Amsterdam",price:17.50},{name:"Pizza Chiara",price:18.50},{name:"Pizza Calzone",price:15.00}
        ],
        "Spezial Pizza": [
            {name:"Pizza Asparagi",price:17.50},{name:"Pizza Gorgonzola",price:16.50},{name:"Pizza Salsiccia",price:17.50},{name:"Pizza Di Capra",price:18.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panna Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Gorgonzola",price:15.50},{name:"Rigatoni Norcina",price:16.50},{name:"Rigatoni 4 Formaggi",price:15.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle Scampi",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Al Forno": [
            {name:"Lasagne Hausgem.",price:16.50},{name:"Tortellini al Forno",price:16.50},{name:"Rigatoni al Forno",price:16.50},{name:"Cannelloni Hausgem.",price:17.50},{name:"Auflauf Spezial",price:17.50}
        ],
        "Snacks": [
            {name:"Pommes Frites",price:6.00},{name:"Nuggets (9 Stk)",price:8.50},{name:"Nuggets (20 Stk)",price:16.00}
        ],
        "Fisch": [
            {name:"Salmone Griglia",price:25.50},{name:"Salmone Basilico",price:26.50},{name:"Calamari Fritti",price:20.00},{name:"Calamari Griglia",price:25.50},{name:"Pesce Misto",price:35.50}
        ],
        "Carne": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Funghi",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Zwiebelschnitzel",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rumpsteak Grill",price:25.50}
        ],
        "Dessert": [
            {name:"Tiramisu Hausgemacht",price:8.00},{name:"Panna Cotta",price:6.50},{name:"Tartufo Eis",price:7.00},{name:"Schoko Souffle",price:7.00}
        ]
    },
    "VEGAN": {
        "V-Pizza": [
            {name:"V. Pizza Primavera",price:12.00},{name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Prosciutto",price:14.50},{name:"V. Pizza Funghi",price:14.00},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spagh. Aglio Olio",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Tagliatelle Salmone",price:20.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener",price:17.00},{name:"V. Jägerschnitzel",price:19.50},{name:"V. Schnitzel Funghi",price:19.50}
        ],
        "V-Dessert": [
            {name:"V. Cheesecake Himbeer",price:8.50},{name:"V. Möhrenkuchen",price:5.50},{name:"V. Tiramisu",price:8.50}
        ]
    },
    "DRINKS": {
        "Alkoholfrei": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},
            {name:"Aqua Panna 0.25l",price:3.00},{name:"Aqua Panna 0.75l",price:7.50},
            {name:"Coca Cola 0.2l",price:3.00},{name:"Coca Cola 0.33l",price:3.50},
            {name:"Cola Zero 0.33l",price:3.50},{name:"Fanta 0.33l",price:3.50},
            {name:"Sprite 0.33l",price:3.50},{name:"Mezzo Mix 0.33l",price:3.50},
            {name:"Vio Apfelschorle 0.3l",price:4.00},{name:"Vio Rhabarber 0.3l",price:4.00},
            {name:"Vio Johannisbeere 0.3l",price:4.00},{name:"Vio Zitrone-Lime 0.3l",price:4.00},
            {name:"Fassbrause Zitrone",price:4.00},{name:"Fassbrause Holunder",price:4.00}
        ],
        "Aperitifs": [
            {name:"Aperol Spritz",price:7.50},{name:"Hugo",price:7.50},{name:"Lillet Berry",price:7.50},
            {name:"Limoncello Spritz",price:7.50},{name:"Prosecco 0.1l",price:6.00},{name:"Gin Tonic",price:8.50},{name:"Mojito",price:9.50}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},
            {name:"Bitburger Pils 0.3l",price:4.00},{name:"Jever 0.3l",price:4.00},
            {name:"Weizenbier 0.5l",price:6.00},{name:"Radler 0.3l",price:3.50},
            {name:"Alkoholfreies Bier",price:3.80}
        ],
        "Wein (Offen)": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Chardonnay 0.25l",price:6.50},
            {name:"Rosato 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},
            {name:"Primitivo 0.25l",price:7.50},{name:"Lambrusco 0.25l",price:6.50}
        ],
        "Spirituosen": [
            {name:"Ramazzotti 4cl",price:6.00},{name:"Averna 4cl",price:6.00},
            {name:"Grappa Haus 2cl",price:5.00},{name:"Grappa Riserva 2cl",price:8.50},
            {name:"Sambuca 4cl",price:6.00},{name:"Limoncello 4cl",price:5.00},
            {name:"Jack Daniels 4cl",price:8.00}
        ],
        "Heisse Getränke": [
            {name:"Espresso",price:2.50},{name:"Kaffee",price:3.00},
            {name:"Cappuccino",price:3.50},{name:"Latte Macchiato",price:4.00},{name:"Tee",price:2.50}
        ]
    }
};

let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};
let paymentHistory = JSON.parse(localStorage.getItem('sor_history')) || [];
let activeTable = 1;

window.onload = () => {
    renderTables();
    showMainSection('FOOD');
    selectTable(1);
};

function renderTables() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const occupied = tableOrders[i] && tableOrders[i].length > 0;
        grid.innerHTML += `<button class="t-btn ${occupied ? 't-occupied' : 't-free'} ${activeTable==i?'t-active':''}" onclick="selectTable(${i})">T${i}</button>`;
    }
}

function showMainSection(section) {
    const nav = document.getElementById('sub-cat-nav');
    nav.innerHTML = '';
    Object.keys(megaMenu[section]).forEach(sub => {
        nav.innerHTML += `<button class="sub-btn" onclick="showItems('${section}', '${sub}')">${sub}</button>`;
    });
    showItems(section, Object.keys(megaMenu[section])[0]);
}

function showItems(section, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[section][sub].map(item => `
        <div class="item-card">
            <b>${item.name}</b><br><small>${item.price.toFixed(2)}€</small>
            <button onclick="addToCart('${item.name}', ${item.price})">ADD</button>
        </div>`).join('');
}

function selectTable(num) {
    activeTable = num;
    document.getElementById('active-table-num').innerText = num;
    renderTables();
    updateCart();
}

function addToCart(name, price) {
    if(!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    save(); updateCart(); renderTables();
}

function updateCart() {
    const container = document.getElementById('cart-items');
    const order = tableOrders[activeTable] || [];
    container.innerHTML = order.map((i, idx) => `
        <div class="cart-row">
            <span>${i.name}</span>
            <span>${i.price.toFixed(2)}€ <button onclick="removeFromCart(${idx})" style="color:red;border:none;background:none;cursor:pointer">×</button></span>
        </div>`).join('');
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function removeFromCart(idx) {
    tableOrders[activeTable].splice(idx, 1);
    save(); updateCart(); renderTables();
}

function openPayment() {
    const order = tableOrders[activeTable] || [];
    if(order.length === 0) return;
    const total = order.reduce((s, i) => s + i.price, 0);
    const date = new Date().toLocaleString('de-DE');

    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h2 style="text-align:center">SORRENTINO</h2>
            <p style="text-align:center; font-size:10px;">${date} | Tisch: ${activeTable}</p>
            <hr style="border-top: 1px dashed #000; margin: 10px 0;">
            ${order.map(i => `<div style="display:flex;justify-content:space-between; font-size:13px; margin-bottom:2px;"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr style="border-top: 1px dashed #000; margin: 10px 0;">
            <div style="display:flex;justify-content:space-between;font-weight:bold; font-size:16px;"><span>TOTAL</span><span>${total.toFixed(2)}€</span></div>
            <div style="display:flex;gap:10px;margin-top:20px;" class="no-print">
                <button onclick="finalize('BAR')" style="flex:1;padding:12px;background:#2e7d32;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer">BAR</button>
                <button onclick="finalize('KARTE')" style="flex:1;padding:12px;background:#1565c0;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer">KARTE</button>
            </div>
            <button class="no-print" style="width:100%; margin-top:10px; padding:10px; background:#eee; border:none; cursor:pointer" onclick="closeModal()">ZURÜCK</button>
