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
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panne Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Gorgonzola",price:15.50},{name:"Rigatoni Norcina",price:16.50},{name:"Rigatoni 4 Formaggi",price:15.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle Scampi",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Al Forno": [
            {name:"Hausgemachte Lasagne",price:16.50},{name:"Tortellini al Forno",price:16.50},{name:"Rigatoni al Forno",price:16.50},{name:"Hausgem. Cannelloni",price:17.50},{name:"Auflauf Spezial",price:17.50}
        ],
        "Snacks": [
            {name:"Pommes Frites",price:6.00},{name:"Chicken Nuggets (9 Stk)",price:8.50},{name:"Chicken Nuggets (20 Stk)",price:16.00}
        ],
        "Fisch": [
            {name:"Salmone Griglia",price:25.50},{name:"Salmone Basilico",price:26.50},{name:"Calamari Fritti",price:20.00},{name:"Calamari Griglia",price:25.50},{name:"Pesce Misto",price:35.50}
        ],
        "Carne": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Funghi",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Zwiebelschnitzel",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rinderfilet Funghi",price:35.50},{name:"Rumpsteak Grill",price:25.50},{name:"Rumpsteak Pfeffer",price:27.50}
        ],
        "Dessert": [
            {name:"Tiramisu Hausgemacht",price:8.00},{name:"Tartufo Eis",price:7.00},{name:"Cassata",price:7.00},{name:"Schoko Souffle",price:7.00}
        ]
    },
    "VEGAN": {
        "V-Pizza": [
            {name:"V. Pizza Primavera",price:12.00},{name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Prosciutto",price:14.50},{name:"V. Pizza Funghi",price:14.00},{name:"V. Pizza Spinaci",price:14.00},{name:"V. Pizza Calzone",price:18.50},{name:"V. Pizza Tonno",price:15.50},{name:"V. Pizza Hawaii",price:15.50},{name:"V. Pizza Prosc. Funghi",price:16.00},{name:"V. Pizza Carciofi",price:16.50},{name:"V. Pizza Spinaci Ex.",price:16.50},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza 4 Stagioni",price:18.50},{name:"V. Pizza Rustica",price:18.50},{name:"V. Pizza Melanzane",price:18.50},{name:"V. Pizza Salmone",price:18.50},{name:"V. Pizza Asparagi",price:19.50},{name:"V. Pizza Pollo",price:19.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spagh. Aglio Olio",price:13.50},{name:"V. Penne Arrabbiata",price:14.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Penne Amatriciana",price:18.50},{name:"V. Tagliatelle al Panna",price:18.50},{name:"V. Penne al Tonno",price:18.50},{name:"V. Rigatoni Norcina",price:19.50},{name:"V. Tagliatelle Salmone",price:20.50},{name:"V. Tagliatelle di Manzo",price:20.50}
        ],
        "V-Al Forno": [
            {name:"V. Rigatoni al Forno",price:18.50},{name:"V. Tortellini al Forno",price:18.50},{name:"V. Lasagne Hausgem.",price:19.50},{name:"V. Cannelloni Hausgem.",price:19.50},{name:"V. Auflauf Spezial",price:20.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener Art",price:17.00},{name:"V. Jägerschnitzel",price:19.50},{name:"V. Schnitzel Funghi",price:19.50},{name:"V. Schnitzel Hollandaise",price:19.50},{name:"V. Zwiebelschnitzel",price:19.50}
        ],
        "V-Fisch": [
            {name:"V. Salmone Griglia",price:26.50},{name:"V. Salmone Basilico",price:28.50}
        ],
        "V-Dessert": [
            {name:"V. Cheesecake Himbeer",price:8.50},{name:"V. Möhrenkuchen",price:5.50},{name:"V. Schokokuchen",price:5.50},{name:"V. Tiramisu",price:8.50}
        ]
    },
    "DRINKS": {
        "Alkoholfrei": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},{name:"Aqua Panna 0.25l",price:3.00},{name:"Aqua Panna 0.75l",price:7.50},{name:"Coca Cola 0.2l",price:3.00},{name:"Coca Cola 0.33l",price:3.50},{name:"Cola Zero 0.33l",price:3.50},{name:"Fanta 0.33l",price:3.50},{name:"Sprite 0.33l",price:3.50},{name:"VIO Schorlen 0.33l",price:4.00}
        ],
        "Aperitifs": [
            {name:"Prosecco 0.1l",price:6.00},{name:"Aperol Spritz 0.2l",price:7.50},{name:"Gin Tonic 0.2l",price:8.50},{name:"Limoncello Spritz",price:7.50},{name:"Mojito",price:9.50},{name:"Lillet",price:7.50}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Pils 0.3l",price:4.00},{name:"Jever 0.3l",price:4.00},{name:"Weizenbier 0.5l",price:6.00}
        ],
        "Weine": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Rosato 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},{name:"Lambrusco 0.25l",price:6.50}
        ],
        "Spirituosen": [
            {name:"Ramazzotti 4cl",price:6.00},{name:"Averna 4cl",price:6.00},{name:"Grappa Riserva 2cl",price:6.00},{name:"Jack Daniels 4cl",price:8.00},{name:"Sambuca 4cl",price:6.00}
        ],
        "Heisse Getränke": [
            {name:"Espresso",price:2.50},{name:"Kaffee",price:3.00},{name:"Cappuccino",price:3.50},{name:"Latte Macchiato",price:4.00},{name:"Tee",price:2.00}
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
    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h2 style="text-align:center">SORRENTINO</h2>
            <hr>
            ${order.map(i => `<div style="display:flex;justify-content:space-between"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr>
            <div style="display:flex;justify-content:space-between;font-weight:bold"><span>GESAMT</span><span>${total.toFixed(2)}€</span></div>
            <div style="display:flex;gap:10px;margin-top:15px;" class="no-print">
                <button onclick="finalize('BAR')" style="flex:1;padding:10px;background:green;color:white;border:none">BAR</button>
                <button onclick="finalize('KARTE')" style="flex:1;padding:10px;background:blue;color:white;border:none">KARTE</button>
            </div>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function finalize(method) {
    const order = tableOrders[activeTable];
    const total = order.reduce((s, i) => s + i.price, 0);
    paymentHistory.push({date: new Date().toLocaleDateString(), total: total, method: method});
    tableOrders[activeTable] = [];
    save(); window.print(); closeModal(); updateCart(); renderTables();
}

function showDayClosing() {
    const bar = paymentHistory.filter(h => h.method === 'BAR').reduce((s, h) => s + h.total, 0);
    const card = paymentHistory.filter(h => h.method === 'KARTE').reduce((s, h) => s + h.total, 0);
    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h3>TAGESABSCHLUSS</h3>
            <p>BAR: ${bar.toFixed(2)}€</p>
            <p>KARTE: ${card.toFixed(2)}€</p>
            <hr>
            <p>TOTAL: ${(bar+card).toFixed(2)}€</p>
            <button onclick="paymentHistory=[];save();closeModal()" style="width:100%;padding:10px;margin-top:10px;background:red;color:white;border:none">TAG RESET</button>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function save() {
    localStorage.setItem('sor_orders', JSON.stringify(tableOrders));
    localStorage.setItem('sor_history', JSON.stringify(paymentHistory));
}
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function clearTable() { if(confirm("Tisch stornieren?")) { tableOrders[activeTable] = []; save(); updateCart(); renderTables(); } }
