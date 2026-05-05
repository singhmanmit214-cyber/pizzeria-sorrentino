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
        "Carne & Fisch": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rumpsteak Grill",price:25.50},{name:"Salmone Griglia",price:25.50},{name:"Calamari Fritti",price:20.00}
        ]
    },
    "VEGAN": {
        "V-Salate": [
            {name:"V. Insalata Mista",price:10.50},{name:"V. Insalata Pomodoro",price:8.50},{name:"V. Insalata Rucola",price:12.00},{name:"V. Insalata Pollo",price:15.50},{name:"V. Insalata Salmone",price:17.50}
        ],
        "V-Pizza": [
            {name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50}
        ]
    },
    "DRINKS": {
        "Softdrinks": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},{name:"Coca Cola 0.33l",price:3.50},{name:"VIO Apfel",price:4.00},{name:"VIO Rhabarber",price:4.00},{name:"Fassbrause Zitrone",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Weizenbier 0.5l",price:6.00}
        ],
        "Wein & Spirit": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},{name:"Primitivo 0.25l",price:7.50},{name:"Ramazzotti",price:6.00},{name:"Grappa Haus",price:5.00}
        ]
    }
};

let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};
let paymentHistory = JSON.parse(localStorage.getItem('sor_history')) || [];
let activeTable = null;

window.onload = renderTables;

function renderTables() {
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
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
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('active-table-num').innerText = num;
    showMainCat('FOOD');
    updateCart();
}

function showMainCat(cat) {
    const nav = document.getElementById('sub-nav');
    nav.innerHTML = '';
    Object.keys(megaMenu[cat]).forEach(sub => {
        let btn = document.createElement('button');
        btn.className = 'sub-btn';
        btn.innerText = sub;
        btn.onclick = () => renderItems(cat, sub);
        nav.appendChild(btn);
    });
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = '';
    display.scrollTop = 0; // Fixes scrolling
    megaMenu[cat][sub].forEach(item => {
        let div = document.createElement('div');
        div.className = 'item-card';
        div.onclick = () => addToCart(item.name, item.price);
        div.innerHTML = `<b>${item.name}</b><br><span>${item.price.toFixed(2)}€</span>`;
        display.appendChild(div);
    });
}

function searchMenu() {
    const q = document.getElementById('search-input').value.toLowerCase();
    const display = document.getElementById('menu-display');
    display.innerHTML = '';
    for (let c in megaMenu) {
        for (let s in megaMenu[c]) {
            megaMenu[c][s].forEach(i => {
                if(i.name.toLowerCase().includes(q)) {
                    let div = document.createElement('div');
                    div.className = 'item-card';
                    div.onclick = () => addToCart(i.name, i.price);
                    div.innerHTML = `<b>${i.name}</b><br><span>${i.price.toFixed(2)}€</span>`;
                    display.appendChild(div);
                }
            });
        }
    }
}

function addToCart(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    save(); updateCart();
}

function updateCart() {
    const order = tableOrders[activeTable] || [];
    document.getElementById('cart-list').innerHTML = order.map((item, idx) => `
        <div class="cart-item"><span>${item.name}</span><span>${item.price.toFixed(2)}€ <button onclick="removeItem(${idx})">×</button></span></div>
    `).join('');
    document.getElementById('total-amount').innerText = order.reduce((s, i) => s + i.price, 0).toFixed(2);
}

function removeItem(idx) {
    tableOrders[activeTable].splice(idx, 1);
    save(); updateCart();
}

function openPayment() {
    const order = tableOrders[activeTable] || [];
    if (!order.length) return;
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('modal-content').innerHTML = `
        <div class="receipt">
            <h2>SORRENTINO</h2>
            <p>Tisch: ${activeTable} | ${new Date().toLocaleString()}</p><hr>
            ${order.map(i => `<div style="display:flex;justify-content:space-between"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr><h3>TOTAL: ${total.toFixed(2)}€</h3>
            <div class="no-print" style="display:flex; flex-direction:column; gap:10px;">
                <button onclick="finalize('BAR')" style="background:green; color:white; padding:12px;">CASH (BAR)</button>
                <button onclick="finalize('KARTE')" style="background:blue; color:white; padding:12px;">CARD (KARTE)</button>
                <button onclick="shareReceipt()" style="background:black; color:white; padding:12px;">SEND / SHARE</button>
                <button onclick="closeModal()">BACK</button>
            </div>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

async function shareReceipt() {
    const order = tableOrders[activeTable];
    let text = `*** SORRENTINO ***\nTisch: ${activeTable}\nTotal: ${document.getElementById('total-amount').innerText}€\n`;
    if (navigator.share) {
        await navigator.share({ title: 'Receipt', text: text });
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    }
}

function finalize(method) {
    const total = parseFloat(document.getElementById('total-amount').innerText);
    paymentHistory.push({ time: new Date().toLocaleTimeString(), method: method, total: total });
    localStorage.setItem('sor_history', JSON.stringify(paymentHistory));
    tableOrders[activeTable] = [];
    save(); window.print(); location.reload();
}

function showDayClosing() {
    const total = paymentHistory.reduce((s, h) => s + h.total, 0);
    alert("Day Total: " + total.toFixed(2) + "€");
}

function save() { localStorage.setItem('sor_orders', JSON.stringify(tableOrders)); }
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
