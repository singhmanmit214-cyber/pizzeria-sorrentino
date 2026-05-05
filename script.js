 // --- 1. THE COMPLETE DATABASE ---
const megaMenu = {
    "FOOD": {
        "Antipasti": [
            {name:"Bruschetta Classic",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen (8 Stk)",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio di Manzo",price:14.00},{name:"Carpaccio di Pesce",price:14.50},{name:"Ziegenkäse",price:15.50},{name:"Antipasto Italiano",price:24.50},{name:"Antipasto Vegetale",price:11.50}
        ],
        "Salate": [
            {name:"Insalata Mista",price:9.00},{name:"Insalata Pomodoro",price:7.50},{name:"Insalata Rucola",price:10.50},{name:"Insalata Contadina",price:12.50},{name:"Insalata Pollo",price:12.50},{name:"Insalata Salmone",price:15.50},{name:"Insalata Capricciosa",price:14.50}
        ],
        "Pizza": [
            {name:"Pizza Margherita",price:10.50},{name:"Pizza Bufalina",price:12.00},{name:"Pizza Primavera",price:12.00},{name:"Pizza Salami",price:12.00},{name:"Pizza Prosciutto",price:12.00},{name:"Pizza Funghi",price:12.00},{name:"Pizza Pugliese",price:14.00},{name:"Pizza Inferno",price:13.00},{name:"Pizza Spinaci",price:12.00},{name:"Pizza Prosc. e Funghi",price:13.50},{name:"Pizza Tonno",price:13.50},{name:"Pizza Hawaii",price:13.00},{name:"Pizza Verdura",price:14.50},{name:"Pizza Quattro Stagioni",price:14.50},{name:"Pizza Quattro Formaggi",price:14.50},{name:"Pizza Carciofi",price:14.50},{name:"Pizza Rustica",price:14.50},{name:"Pizza Frutti di Mare",price:14.50},{name:"Pizza Capri",price:14.00},{name:"Pizza Melanzane",price:15.50},{name:"Pizza Chef",price:15.50},{name:"Pizza Salmone",price:16.50},{name:"Pizza Parma",price:16.50},{name:"Pizza Salvatore",price:16.50},{name:"Pizza Pollo",price:16.50},{name:"Pizza Amsterdam",price:17.50},{name:"Pizza Chiara",price:18.50},{name:"Pizza Calzone",price:15.00}
        ],
        "Specials": [
            {name:"Pizza Asparagi",price:17.50},{name:"Pizza Gorgonzola",price:16.50},{name:"Pizza Salsiccia",price:17.50},{name:"Pizza Di Capra",price:18.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panna Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Gorgonzola",price:15.50},{name:"Rigatoni Norcina",price:16.50},{name:"Rigatoni 4 Formaggi",price:15.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle Scampi",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Al Forno": [
            {name:"Lasagne Hausgem.",price:16.50},{name:"Tortellini al Forno",price:16.50},{name:"Rigatoni al Forno",price:16.50},{name:"Cannelloni Hausgem.",price:17.50},{name:"Auflauf Spezial",price:17.50}
        ],
        "Carne & Pesce": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rumpsteak Grill",price:25.50},{name:"Salmone Griglia",price:25.50},{name:"Calamari Fritti",price:20.00}
        ],
        "Dessert": [
            {name:"Tiramisu Hausgem.",price:8.00},{name:"Panna Cotta",price:6.50},{name:"Tartufo Eis",price:7.00},{name:"Cassata",price:7.00}
        ]
    },
    "VEGAN": {
        "V-Salate": [
            {name:"V. Insalata Mista",price:10.50},{name:"V. Insalata Pomodoro",price:8.50},{name:"V. Insalata Rucola",price:12.00},{name:"V. Insalata Contadina",price:14.50},{name:"V. Insalata Pollo",price:15.50},{name:"V. Insalata Salmone",price:17.50},{name:"V. Insalata Capricciosa",price:16.50}
        ],
        "V-Pizza": [
            {name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Hawaii",price:15.50},{name:"V. Pizza Amsterdam",price:20.50},{name:"V. Pizza Bufalina",price:14.00}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Rigatoni Norcina",price:19.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener",price:17.00},{name:"V. Jägerschnitzel",price:19.50}
        ],
        "V-Dessert": [
            {name:"V. Cheesecake Himbeer",price:8.50}
        ]
    },
    "DRINKS": {
        "Alkoholfrei": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},{name:"Aqua Panna 0.25l",price:3.00},{name:"Coca Cola 0.33l",price:3.50},{name:"Cola Zero 0.33l",price:3.50},{name:"VIO Apfel",price:4.00},{name:"VIO Rhabarber",price:4.00},{name:"VIO Johannisbeer",price:4.00},{name:"Fassbrause Zitrone",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Jever",price:4.00},{name:"Weizenbier 0.5l",price:6.00},{name:"Radler 0.3l",price:3.50}
        ],
        "Wein": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Chardonnay 0.25l",price:6.50},{name:"Rosato 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},{name:"Primitivo 0.25l",price:7.50},{name:"Lambrusco 0.25l",price:6.50}
        ],
        "Spirituosen": [
            {name:"Ramazzotti",price:6.00},{name:"Averna",price:6.00},{name:"Grappa Haus",price:5.00},{name:"Grappa Riserva",price:8.50},{name:"Sambuca",price:6.00},{name:"Jack Daniels",price:8.00}
        ],
        "Heißgetränke": [
            {name:"Espresso",price:2.50},{name:"Kaffee",price:3.00},{name:"Cappuccino",price:3.50},{name:"Latte Macchiato",price:4.00},{name:"Tee",price:2.50}
        ]
    }
};

// --- 2. APP STATE ---
let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};
let paymentHistory = JSON.parse(localStorage.getItem('sor_history')) || [];
let activeTable = null;

// --- 3. CORE LOGIC ---
window.onload = () => renderTableSelection();

function renderTableSelection() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const isOcc = tableOrders[i] && tableOrders[i].length > 0;
        grid.innerHTML += `<button class="t-btn ${isOcc ? 'occupied' : 'free'}" onclick="openTable(${i})">Tisch ${i}</button>`;
    }
}

function openTable(num) {
    activeTable = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    document.getElementById('active-table-title').innerText = num;
    showCategory('FOOD');
    updateCart();
}

function showCategory(cat) {
    const nav = document.getElementById('sub-nav');
    nav.innerHTML = Object.keys(megaMenu[cat]).map(sub => 
        `<button class="sub-btn" onclick="renderItems('${cat}', '${sub}')">${sub}</button>`
    ).join('');
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[cat][sub].map(item => `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
            <b>${item.name}</b><br><span style="color:#27ae60">${item.price.toFixed(2)}€</span>
        </div>`).join('');
}

function searchMenu() {
    const q = document.getElementById('search-input').value.toLowerCase();
    const display = document.getElementById('menu-display');
    let results = [];
    for (let c in megaMenu) {
        for (let s in megaMenu[c]) {
            megaMenu[c][s].forEach(i => { if(i.name.toLowerCase().includes(q)) results.push(i); });
        }
    }
    display.innerHTML = results.map(item => `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
            <b>${item.name}</b><br><span>${item.price.toFixed(2)}€</span>
        </div>`).join('');
}

function addToCart(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    save(); updateCart();
}

function updateCart() {
    const order = tableOrders[activeTable] || [];
    document.getElementById('cart-list').innerHTML = order.map((item, idx) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)}€ <button onclick="removeItem(${idx})">×</button></span>
        </div>`).join('');
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-amount').innerText = total.toFixed(2);
    document.getElementById('cart-badge').innerText = order.length;
}

function removeItem(idx) {
    tableOrders[activeTable].splice(idx, 1);
    save(); updateCart();
}

// --- 4. BILLING & UNIVERSAL SHARING ---
function openPayment() {
    const order = tableOrders[activeTable] || [];
    if (!order.length) return;
    const total = order.reduce((s, i) => s + i.price, 0);

    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h2 style="text-align:center">SORRENTINO</h2>
            <p>Tisch: ${activeTable} | ${new Date().toLocaleString()}</p>
            <hr>
            ${order.map(i => `<div style="display:flex;justify-content:space-between"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr>
            <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:1.2rem"><span>TOTAL</span><span>${total.toFixed(2)}€</span></div>
            <div class="no-print" style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
                <button onclick="finalize('BAR')" style="background:#27ae60; color:white; padding:15px; border:none; border-radius:5px;">BAR ZAHLEN</button>
                <button onclick="finalize('KARTE')" style="background:#2980b9; color:white; padding:15px; border:none; border-radius:5px;">KARTE ZAHLEN</button>
                <button onclick="shareReceipt()" style="background:#000; color:white; padding:15px; border:none; border-radius:5px;">RECEIPT TEILEN (Any App)</button>
                <button onclick="closeModal()" style="background:#777; color:white; padding:10px; border:none; border-radius:5px;">ZURÜCK</button>
            </div>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

async function shareReceipt() {
    const order = tableOrders[activeTable];
    const total = order.reduce((s, i) => s + i.price, 0).toFixed(2);
    let text = `*** SORRENTINO BELEG ***\nTisch: ${activeTable}\nDatum: ${new Date().toLocaleString()}\n--------------------------\n`;
    order.forEach(i => text += `${i.name}: ${i.price.toFixed(2)}€\n`);
    text += `--------------------------\nTOTAL: ${total}€\nGrazie & Arrivederci!`;

    if (navigator.share) {
        try {
            await navigator.share({ title: 'Sorrentino Beleg', text: text });
        } catch (err) { console.log("Share failed or cancelled"); }
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    }
}

function finalize(method) {
    const total = tableOrders[activeTable].reduce((s, i) => s + i.price, 0);
    paymentHistory.push({
        time: new Date().toLocaleTimeString(),
        table: activeTable,
        total: total,
        method: method
    });
    tableOrders[activeTable] = [];
    localStorage.setItem('sor_history', JSON.stringify(paymentHistory));
    save(); 
    window.print(); 
    location.reload();
}

function showDayClosing() {
    const bar = paymentHistory.filter(h => h.method === 'BAR').reduce((s, h) => s + h.total, 0);
    const card = paymentHistory.filter(h => h.method === 'KARTE').reduce((s, h) => s + h.total, 0);
    
    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h3 style="text-align:center">TAGESABSCHLUSS</h3>
            <hr>
            <div style="max-height:200px; overflow-y:auto; font-size:12px;">
                ${paymentHistory.map(h => `<div>${h.time} - T${h.table} - ${h.method}: ${h.total.toFixed(2)}€</div>`).join('')}
            </div>
            <hr>
            <div>BAR: ${bar.toFixed(2)}€</div>
            <div>KARTE: ${card.toFixed(2)}€</div>
            <div style="font-weight:bold; font-size:1.2rem">TOTAL: ${(bar+card).toFixed(2)}€</div>
            <button onclick="if(confirm('Umsatz löschen?')){paymentHistory=[];localStorage.setItem('sor_history','[]');location.reload();}" style="background:red; color:white; width:100%; margin-top:10px; padding:10px; border:none; border-radius:5px;">NEUER TAG (RESET)</button>
            <button onclick="closeModal()" style="width:100%; margin-top:5px; padding:10px; border:none; border-radius:5px;">SCHLIESSEN</button>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function save() { localStorage.setItem('sor_orders', JSON.stringify(tableOrders)); }
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }
function exitToTables() { location.reload(); }
