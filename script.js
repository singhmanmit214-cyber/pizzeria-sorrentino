 // 1. FULL DATABASE (All items from your photos + Vegan Salads)
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
        "Spezial Pizza": [
            {name:"Pizza Asparagi",price:17.50},{name:"Pizza Gorgonzola",price:16.50},{name:"Pizza Salsiccia",price:17.50},{name:"Pizza Di Capra",price:18.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panna Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Gorgonzola",price:15.50},{name:"Rigatoni Norcina",price:16.50},{name:"Rigatoni 4 Formaggi",price:15.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle Scampi",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Al Forno": [
            {name:"Lasagne Hausgem.",price:16.50},{name:"Tortellini al Forno",price:16.50},{name:"Rigatoni al Forno",price:16.50},{name:"Cannelloni Hausgem.",price:17.50},{name:"Auflauf Spezial",price:17.50}
        ],
        "Carne": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Zwiebelschnitzel",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rumpsteak Grill",price:25.50}
        ],
        "Fisch": [
            {name:"Salmone Griglia",price:25.50},{name:"Salmone Basilico",price:26.50},{name:"Calamari Fritti",price:20.00},{name:"Calamari Griglia",price:25.50}
        ],
        "Snacks": [
            {name:"Pommes Frites",price:6.00},{name:"Nuggets (9 Stk)",price:8.50},{name:"Nuggets (20 Stk)",price:16.00}
        ]
    },
    "VEGAN": {
        "V-Salate": [
            {name:"V. Insalata Mista",price:10.50},{name:"V. Insalata Pomodoro",price:8.50},{name:"V. Insalata Rucola",price:12.00},{name:"V. Insalata Contadina",price:14.50},{name:"V. Insalata Pollo",price:15.50},{name:"V. Insalata Salmone",price:17.50},{name:"V. Insalata Capricciosa",price:16.50}
        ],
        "V-Pizza": [
            {name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Funghi",price:14.00},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spagh. Aglio Olio",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Tagliatelle Salmone",price:20.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener",price:17.00},{name:"V. Jägerschnitzel",price:19.50},{name:"V. Zwiebelschnitzel",price:19.50}
        ]
    },
    "DRINKS": {
        "Alkoholfrei": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},{name:"Coca Cola 0.33l",price:3.50},{name:"Cola Zero 0.33l",price:3.50},{name:"Fanta 0.33l",price:3.50},{name:"VIO Apfelschorle",price:4.00},{name:"VIO Rhabarberschorle",price:4.00},{name:"Gaffels Fassbrause",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Jever",price:4.00},{name:"Weizenbier 0.5l",price:6.00},{name:"Radler 0.3l",price:3.50}
        ],
        "Wein": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Rosato 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},{name:"Primitivo 0.25l",price:7.50}
        ],
        "Aperitifs": [
            {name:"Aperol Spritz",price:7.50},{name:"Hugo",price:7.50},{name:"Lillet Berry",price:7.50},{name:"Gin Tonic",price:8.50}
        ]
    }
};

// 2. STATE MANAGEMENT
let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};
let activeTable = null;

// 3. CORE FUNCTIONS
window.onload = () => renderTables();

function renderTables() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const isOccupied = tableOrders[i] && tableOrders[i].length > 0;
        grid.innerHTML += `
            <button class="t-btn ${isOccupied ? 'occupied' : 'free'}" onclick="openTable(${i})">
                Tisch ${i}
            </button>`;
    }
}

function openTable(num) {
    activeTable = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    document.getElementById('active-table-num').innerText = num;
    showMainCategory('FOOD');
    updateCart();
}

function showMainCategory(cat) {
    const subNav = document.getElementById('sub-category-nav');
    subNav.innerHTML = Object.keys(megaMenu[cat]).map(sub => 
        `<button class="sub-btn" onclick="renderItems('${cat}', '${sub}')">${sub}</button>`
    ).join('');
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = megaMenu[cat][sub].map(item => `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
            <div class="item-name">${item.name}</div>
            <div class="item-price">${item.price.toFixed(2)}€</div>
        </div>
    `).join('');
}

function searchMenu() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const display = document.getElementById('menu-display');
    let results = [];
    
    for (let cat in megaMenu) {
        for (let sub in megaMenu[cat]) {
            megaMenu[cat][sub].forEach(item => {
                if (item.name.toLowerCase().includes(input)) results.push(item);
            });
        }
    }
    
    display.innerHTML = results.map(item => `
        <div class="item-card" onclick="addToCart('${item.name}', ${item.price})">
            <div class="item-name">${item.name}</div>
            <div class="item-price">${item.price.toFixed(2)}€</div>
        </div>
    `).join('');
}

function addToCart(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    save();
    updateCart();
}

function updateCart() {
    const order = tableOrders[activeTable] || [];
    const container = document.getElementById('cart-list');
    container.innerHTML = order.map((item, idx) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)}€ <button onclick="removeItem(${idx})">×</button></span>
        </div>
    `).join('');
    
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-amount').innerText = total.toFixed(2);
    document.getElementById('cart-badge').innerText = order.length;
}

function removeItem(idx) {
    tableOrders[activeTable].splice(idx, 1);
    save();
    updateCart();
}

function openPayment() {
    const order = tableOrders[activeTable] || [];
    if (order.length === 0) return;
    const total = order.reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById('modal-content').innerHTML = `
        <div class="receipt" id="final-receipt">
            <h2 style="text-align:center">SORRENTINO</h2>
            <p style="text-align:center; font-size:12px;">Tisch ${activeTable} | ${new Date().toLocaleString()}</p>
            <hr>
            ${order.map(i => `<div style="display:flex;justify-content:space-between"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr>
            <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:18px"><span>TOTAL</span><span>${total.toFixed(2)}€</span></div>
            <div class="no-print" style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
                <button onclick="window.print()" style="padding:15px; background:black; color:white;">PRINT RECEIPT</button>
                <button onclick="shareWhatsApp()" style="padding:15px; background:#25D366; color:white;">SHARE ON WHATSAPP</button>
                <button onclick="finalizeSale()" style="padding:15px; background:green; color:white;">FINISH & CLEAR TABLE</button>
                <button onclick="closeModal()" style="padding:10px; background:#eee;">BACK</button>
            </div>
        </div>
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function shareWhatsApp() {
    const order = tableOrders[activeTable];
    let text = `*SORRENTINO RECEIPT*\nTable: ${activeTable}\n---\n`;
    order.forEach(i => text += `${i.name}: ${i.price.toFixed(2)}€\n`);
    text += `---\n*TOTAL: ${order.reduce((s,i)=>s+i.price,0).toFixed(2)}€*`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

function finalizeSale() {
    tableOrders[activeTable] = [];
    save();
    location.reload();
}

function save() { localStorage.setItem('sor_orders', JSON.stringify(tableOrders)); }
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
function exitMenu() { document.getElementById('table-screen').style.display = 'block'; document.getElementById('menu-screen').style.display = 'none'; renderTables(); }
function toggleCart() { document.getElementById('cart-panel').classList.toggle('open'); }
