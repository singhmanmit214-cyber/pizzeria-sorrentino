 const megaMenu = {
    "ESSEN": {
        "Antipasti": [
            {name:"Bruschetta Classic",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen (8 Stk)",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio di Manzo",price:14.00},{name:"Carpaccio di Pesce",price:14.50},{name:"Ziegenkäse",price:15.50},{name:"Antipasto Italiano",price:24.50}
        ],
        "Pizza": [
            {name:"Pizza Margherita",price:10.50},{name:"Pizza Bufalina",price:12.00},{name:"Pizza Salami",price:12.00},{name:"Pizza Prosciutto",price:12.00},{name:"Pizza Funghi",price:12.00},{name:"Pizza Tonno",price:13.50},{name:"Pizza Hawaii",price:13.00},{name:"Pizza Verdura",price:14.50},{name:"Pizza 4 Formaggi",price:14.50},{name:"Pizza Parma",price:16.50},{name:"Pizza Salvatore",price:16.50},{name:"Pizza Amsterdam",price:17.50},{name:"Pizza Calzone",price:15.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Carbonara",price:16.50},{name:"Penne Arrabbiata",price:13.00},{name:"Rigatoni Norcina",price:16.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Lasagne Hausgem.",price:16.50}
        ],
        "Fleisch/Fisch": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Jägerschnitzel",price:18.50},{name:"Rumpsteak Grill",price:25.50},{name:"Salmone Griglia",price:25.50},{name:"Calamari Fritti",price:20.00}
        ]
    },
    "GETRÄNKE": {
        "Softdrinks": [
            {name:"S.Pelleg 0.25l",price:3.00},{name:"S.Pelleg 0.75l",price:7.50},{name:"Coca Cola 0.33l",price:3.50},{name:"VIO Apfel",price:4.00},{name:"VIO Rhabarber",price:4.00},{name:"Fassbrause",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Weizenbier 0.5l",price:6.00}
        ],
        "Wein/Spirit": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Montepulciano",price:6.50},{name:"Primitivo 0.25l",price:7.50},{name:"Ramazzotti",price:6.00},{name:"Grappa Haus",price:5.00},{name:"Grappa Riserva",price:8.50}
        ]
    },
    "VEGAN": {
        "V-Pizza": [
            {name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Funghi",price:14.00},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Rigatoni Norcina",price:19.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener",price:17.00},{name:"V. Jägerschnitzel",price:19.50}
        ],
        "V-Salate": [
            {name:"V. Insalata Mista",price:10.50},{name:"V. Insalata Rucola",price:12.00}
        ]
    }
};

let activeTable = null;
let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};

// Initialize App
window.onload = renderTables;

function renderTables() {
    document.getElementById('table-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const isOcc = tableOrders[i] && tableOrders[i].length > 0;
        grid.innerHTML += `<button class="t-btn ${isOcc ? 'occupied' : 'free'}" onclick="openTable(${i})">TISCH ${i}</button>`;
    }
}

function openTable(num) {
    activeTable = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('current-tisch-display').innerText = "TISCH " + num;
    showHub(); // Centered category selection
    updateCart();
}

function showHub() {
    // Hide sub-navigation (Pizza/Pasta buttons) when in the main choice menu
    document.getElementById('sub-nav-container').style.display = 'none';
    const display = document.getElementById('menu-display');
    
    // Create the 3 big gold boxes in the middle
    display.innerHTML = `
        <div class="hub-container">
            <button class="gold-hub-box" onclick="openMainCat('ESSEN')">ESSEN</button>
            <button class="gold-hub-box" onclick="openMainCat('GETRÄNKE')">GETRÄNKE</button>
            <button class="gold-hub-box" onclick="openMainCat('VEGAN')">VEGAN FOOD</button>
            <button class="hub-back" onclick="renderTables()">← ZURÜCK ZU TISCHEN</button>
        </div>`;
}

function openMainCat(cat) {
    const nav = document.getElementById('sub-nav-container');
    nav.style.display = 'flex';
    nav.innerHTML = `<button onclick="showHub()" class="gold-nav-back">←</button>`;
    
    // Add sub-categories (like Pizza, Pasta) to the top bar
    Object.keys(megaMenu[cat]).forEach(sub => {
        let btn = document.createElement('button');
        btn.className = 'gold-nav-btn';
        btn.innerText = sub;
        btn.onclick = () => renderItems(cat, sub);
        nav.appendChild(btn);
    });
    
    // Default show first sub-category
    renderItems(cat, Object.keys(megaMenu[cat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = '';
    megaMenu[cat][sub].forEach(item => {
        let div = document.createElement('div');
        div.className = 'gold-item-card';
        div.onclick = () => addToCart(item.name, item.price);
        div.innerHTML = `<b>${item.name}</b><br><span class="gold-price">${item.price.toFixed(2)}€</span>`;
        display.appendChild(div);
    });
}

function addToCart(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    localStorage.setItem('sor_orders', JSON.stringify(tableOrders));
    updateCart();
}

function updateCart() {
    const order = tableOrders[activeTable] || [];
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-status').innerText = `${order.length} Items | ${total.toFixed(2)}€`;
}
