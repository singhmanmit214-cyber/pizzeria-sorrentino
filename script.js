 const menuData = {
    "Antipasti": [
        { name: "Bruschetta Classic", price: 8.50 }, { name: "Focaccia", price: 6.50 },
        { name: "Pizzabrötchen (8 Stk)", price: 5.50 }, { name: "Caprese", price: 12.50 },
        { name: "Carpaccio di Manzo", price: 14.00 }, { name: "Carpaccio di Pesce", price: 14.50 },
        { name: "Ziegenkäse", price: 15.50 }, { name: "Antipasto Italiano", price: 24.50 },
        { name: "Antipasto Vegetale", price: 11.50 }
    ],
    "Pizza": [
        { name: "Pizza Margherita", price: 10.50 }, { name: "Pizza Bufalina", price: 12.00 },
        { name: "Pizza Primavera", price: 12.00 }, { name: "Pizza Salami", price: 12.00 },
        { name: "Pizza Prosciutto", price: 12.00 }, { name: "Pizza Funghi", price: 12.00 },
        { name: "Pizza Pugliese", price: 14.00 }, { name: "Pizza Inferno", price: 13.00 },
        { name: "Pizza Spinaci", price: 12.00 }, { name: "Pizza Prosciutto e Funghi", price: 13.50 },
        { name: "Pizza Tonno", price: 13.50 }, { name: "Pizza Hawaii", price: 13.00 },
        { name: "Pizza Verdura", price: 14.50 }, { name: "Pizza Quattro Stagioni", price: 14.50 },
        { name: "Pizza Quattro Formaggi", price: 14.50 }, { name: "Pizza Carciofi", price: 14.50 },
        { name: "Pizza Rustica", price: 14.50 }, { name: "Pizza Frutti di Mare", price: 14.50 },
        { name: "Pizza Capri", price: 14.00 }, { name: "Pizza Melanzane", price: 15.50 },
        { name: "Pizza Chef", price: 15.50 }, { name: "Pizza Salmone", price: 16.50 },
        { name: "Pizza Parma", price: 16.50 }, { name: "Pizza Salvatore", price: 16.50 },
        { name: "Pizza Pollo", price: 16.50 }, { name: "Pizza Amsterdam", price: 17.50 },
        { name: "Pizza Chiara", price: 18.50 }, { name: "Pizza Calzone", price: 15.00 }
    ],
    "Pasta": [
        { name: "Spaghetti Napoli", price: 12.00 }, { name: "Spaghetti Bolognese", price: 15.50 },
        { name: "Spaghetti Aglio Olio", price: 12.00 }, { name: "Spaghetti Carbonara", price: 16.50 },
        { name: "Tortellini Panne e Prosciutto", price: 15.50 }, { name: "Penne Arrabbiata", price: 13.00 },
        { name: "Penne Amatriciana", price: 16.50 }, { name: "Rigatoni Gorgonzola", price: 15.50 },
        { name: "Rigatoni Norcina", price: 16.50 }, { name: "Rigatoni Quattro Formaggi", price: 15.50 },
        { name: "Tagliatelle Salmone", price: 19.50 }, { name: "Tagliatelle Scampi", price: 19.50 },
        { name: "Tagliatelle di Manzo", price: 20.50 }
    ],
    "ALKOHOLFREI": [
        { name: "S.Pellegrino 0.25l", price: 3.00 }, { name: "S.Pellegrino 0.75l", price: 7.50 },
        { name: "Aqua Panna 0.25l", price: 3.00 }, { name: "Aqua Panna 0.75l", price: 7.50 },
        { name: "Coca Cola 0.2l", price: 3.00 }, { name: "Coca Cola 0.33l", price: 3.50 },
        { name: "Cola Zero 0.33l", price: 3.50 }, { name: "Fanta/Sprite 0.33l", price: 3.50 },
        { name: "Mezzo Mix 0.33l", price: 3.50 }, { name: "Apfelschorle 0.33l", price: 3.50 },
        { name: "VIO Schorlen 0.33l", price: 4.00 }, { name: "Gaffels Fassbrause", price: 4.00 }
    ],
    "Aperitifs": [
        { name: "Prosecco 0.1l", price: 6.00 }, { name: "Aperol Spritz", price: 7.50 },
        { name: "Martini Bianco", price: 6.50 }, { name: "Gin Tonic", price: 8.50 },
        { name: "Campari Soda", price: 6.50 }, { name: "Campari Orange", price: 7.50 },
        { name: "Limoncello Spritz", price: 7.50 }, { name: "Lillet", price: 7.50 },
        { name: "Mojito", price: 9.50 }
    ],
    "Bier": [
        { name: "Kölsch 0.2l", price: 3.00 }, { name: "Kölsch 0.3l", price: 3.50 },
        { name: "Pils 0.3l", price: 4.00 }, { name: "Jever 0.3l", price: 4.00 },
        { name: "Weizenbier 0.5l", price: 6.00 }, { name: "Malzbier 0.33l", price: 4.00 }
    ],
    "Wein": {
        "Vino Bianco": [
            { name: "Pinot Grigio 0.2l", price: 6.50 }, { name: "Pinot Grigio 0.5l", price: 14.00 },
            { name: "Pinot Grigio 1.0l", price: 26.00 }
        ],
        "Vino Rosé": [
            { name: "Spineli Rosato 0.2l", price: 6.50 }, { name: "Spineli Rosato 0.5l", price: 14.00 },
            { name: "Spineli Rosato 1.0l", price: 26.00 }
        ],
        "Vino Rosso": [
            { name: "Montepulciano 0.2l", price: 6.50 }, { name: "Montepulciano 0.5l", price: 14.00 },
            { name: "Lambrusco 0.2l", price: 6.50 }
        ]
    },
    "Spirituosen & Grappa": {
        "Spirituosen": [
            { name: "Ramazotti 4cl", price: 6.00 }, { name: "Averna 4cl", price: 6.00 },
            { name: "Sambuca 4cl", price: 6.00 }, { name: "Limoncello 4cl", price: 5.00 },
            { name: "Jack Daniels 4cl", price: 8.00 }, { name: "Gin 4cl", price: 6.00 }
        ],
        "Grappa": [
            { name: "Grappa Riserva 2cl", price: 6.00 }, { name: "Sarpa oro di poli 2cl", price: 8.00 }
        ]
    },
    "Heisse Getränke": [
        { name: "Espresso", price: 2.50 }, { name: "Kaffee", price: 3.00 },
        { name: "Cappuccino", price: 3.50 }, { name: "Milchkaffee", price: 3.50 },
        { name: "Latte Macchiato", price: 4.00 }, { name: "Tee", price: 2.00 }
    ]
};

let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || Array(16).fill([]);
let currentTable = 1;

window.onload = () => openTable(1); // Starts directly on Table 1 menu

function openTable(num) {
    currentTable = num;
    loadMainCategories();
    updateUI();
}

function loadMainCategories() {
    const container = document.getElementById('cat-list');
    container.innerHTML = '';
    Object.keys(menuData).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.innerText = cat;
        btn.onclick = () => (typeof menuData[cat] === 'object' && !Array.isArray(menuData[cat])) ? loadSubCategories(cat) : loadItems(cat);
        container.appendChild(btn);
    });
}

function loadSubCategories(mainCat) {
    const container = document.getElementById('cat-list');
    container.innerHTML = '';
    Object.keys(menuData[mainCat]).forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.innerText = sub;
        btn.onclick = () => loadSubItems(mainCat, sub);
        container.appendChild(btn);
    });
    container.innerHTML += `<button class="cat-btn" style="background:#444" onclick="loadMainCategories()">BACK</button>`;
}

function loadItems(cat) {
    const list = document.getElementById('item-list');
    list.innerHTML = menuData[cat].map(item => `
        <div class="i-card">
            <b>${item.name}</b>
            <small>${item.price.toFixed(2)}€</small>
            <button onclick="addToCart('${item.name}', ${item.price})">+</button>
        </div>
    `).join('');
}

function loadSubItems(main, sub) {
    const list = document.getElementById('item-list');
    list.innerHTML = menuData[main][sub].map(item => `
        <div class="i-card">
            <b>${item.name}</b>
            <small>${item.price.toFixed(2)}€</small>
            <button onclick="addToCart('${item.name}', ${item.price})">+</button>
        </div>
    `).join('');
}

function addToCart(name, price) {
    if (!tableOrders[currentTable]) tableOrders[currentTable] = [];
    tableOrders[currentTable].push({name, price});
    save();
    updateUI();
}

function updateUI() {
    const order = tableOrders[currentTable] || [];
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-count').innerText = order.length;
    document.getElementById('cart-total-top').innerText = total.toFixed(2);
}

function showCartOptions() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function cancelOrder() {
    tableOrders[currentTable] = [];
    save();
    updateUI();
    document.getElementById('cart-modal').style.display = 'none';
}

function openBilling() {
    const order = tableOrders[currentTable] || [];
    const total = order.reduce((s, i) => s + i.price, 0);
    const receiptHTML = `
        <div class="receipt-card" id="printable-receipt">
            <h2 style="text-align:center">SORRENTINO</h2>
            <p style="text-align:center; font-size:12px;">Pizzeria - Trattoria</p>
            <hr>
            ${order.map(i => `<div style="display:flex; justify-content:space-between"><span>${i.name}</span><span>${i.price.toFixed(2)}€</span></div>`).join('')}
            <hr>
            <div style="display:flex; justify-content:space-between; font-weight:bold"><span>TOTAL</span><span>${total.toFixed(2)}€</span></div>
            <div class="receipt-actions">
                <button onclick="window.print()">PRINT</button>
                <button onclick="downloadReceipt()">DOWNLOAD</button>
                <button onclick="shareReceipt()">SHARE</button>
            </div>
            <button onclick="closeBilling()" style="width:100%; margin-top:10px;">CLOSE</button>
        </div>
    `;
    document.getElementById('billing-overlay').innerHTML = receiptHTML;
    document.getElementById('billing-overlay').style.display = 'flex';
    document.getElementById('cart-modal').style.display = 'none';
}

function closeBilling() { document.getElementById('billing-overlay').style.display = 'none'; }
function save() { localStorage.setItem('sor_orders', JSON.stringify(tableOrders)); }

// Mobile Share API Integration
async function shareReceipt() {
    const text = `Sorrentino Receipt: Total ${document.getElementById('cart-total-top').innerText}€`;
    if (navigator.share) {
        await navigator.share({ title: 'Sorrentino Receipt', text: text, url: window.location.href });
    } else { alert("Share not supported on this browser."); }
}
