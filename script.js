 // --- COMPLETE MENU DATABASE ---
const megaMenu = {
    "FOOD": {
        "Antipasti": [
            {name:"Bruschetta Classic",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen (8 Stk)",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio di Manzo",price:14.00},{name:"Carpaccio di Pesce",price:14.50},{name:"Ziegenkäse",price:15.50},{name:"Antipasto Italiano",price:24.50},{name:"Antipasto Vegetale",price:11.50}
        ],
        "Pizza": [
            {name:"Pizza Margherita",price:10.50},{name:"Pizza Bufalina",price:12.00},{name:"Pizza Primavera",price:12.00},{name:"Pizza Salami",price:12.00},{name:"Pizza Prosciutto",price:12.00},{name:"Pizza Funghi",price:12.00},{name:"Pizza Pugliese",price:14.00},{name:"Pizza Inferno",price:13.00},{name:"Pizza Spinaci",price:12.00},{name:"Pizza Prosc. e Funghi",price:13.50},{name:"Pizza Tonno",price:13.50},{name:"Pizza Hawaii",price:13.00},{name:"Pizza Verdura",price:14.50},{name:"Pizza Quattro Stagioni",price:14.50},{name:"Pizza Quattro Formaggi",price:14.50},{name:"Pizza Carciofi",price:14.50},{name:"Pizza Rustica",price:14.50},{name:"Pizza Frutti di Mare",price:14.50},{name:"Pizza Capri",price:14.00},{name:"Pizza Melanzane",price:15.50},{name:"Pizza Chef",price:15.50},{name:"Pizza Salmone",price:16.50},{name:"Pizza Parma",price:16.50},{name:"Pizza Salvatore",price:16.50},{name:"Pizza Pollo",price:16.50},{name:"Pizza Amsterdam",price:17.50},{name:"Pizza Chiara",price:18.50},{name:"Pizza Calzone",price:15.00}
        ],
        "Specials": [
            {name:"Pizza Asparagi",price:17.50},{name:"Pizza Gorgonzola",price:16.50},{name:"Pizza Salsiccia",price:17.50},{name:"Pizza Di Capra",price:18.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panna Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Norcina",price:16.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Fleisch/Fisch": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Jägerschnitzel",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Salmone Griglia",price:25.50},{name:"Calamari Fritti",price:20.00}
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
        ]
    },
    "DRINKS": {
        "Softdrinks": [
            {name:"S. Pellegrino 0.75l",price:7.50},{name:"Cola 0.33l",price:3.50},{name:"VIO Apfelschorle",price:4.00},{name:"VIO Rhabarber",price:4.00},{name:"Fassbrause",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Weizenbier 0.5l",price:6.00}
        ],
        "Wein/Spirit": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Primitivo 0.25l",price:7.50},{name:"Ramazzotti",price:6.00},{name:"Grappa Haus",price:5.00}
        ]
    }
};

let activeTable = null;
let tableOrders = JSON.parse(localStorage.getItem('sor_orders')) || {};

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
    document.getElementById('current-tisch-header').innerText = "Tisch " + num;
    showCategoryHub(); // Show FOOD, DRINKS, VEGAN first
}

function showCategoryHub() {
    const display = document.getElementById('menu-display');
    document.getElementById('sub-nav').innerHTML = ''; // Clear sub-category buttons
    display.innerHTML = `
        <div class="category-hub">
            <button class="hub-btn food" onclick="loadSubCategories('FOOD')">ESSEN (FOOD)</button>
            <button class="hub-btn drinks" onclick="loadSubCategories('DRINKS')">GETRÄNKE (DRINKS)</button>
            <button class="hub-btn vegan" onclick="loadSubCategories('VEGAN')">VEGAN</button>
            <button class="hub-btn back" onclick="renderTables()">ZURÜCK ZU TISCHE</button>
        </div>`;
}

function loadSubCategories(mainCat) {
    const nav = document.getElementById('sub-nav');
    nav.innerHTML = `<button class="sub-btn back-to-hub" onclick="showCategoryHub()">← ZURÜCK</button>`;
    
    Object.keys(megaMenu[mainCat]).forEach(sub => {
        let btn = document.createElement('button');
        btn.className = 'sub-btn';
        btn.innerText = sub;
        btn.onclick = () => renderItems(mainCat, sub);
        nav.appendChild(btn);
    });
    
    // Auto-load first sub-category (like Antipasti)
    renderItems(mainCat, Object.keys(megaMenu[mainCat])[0]);
}

function renderItems(cat, sub) {
    const display = document.getElementById('menu-display');
    display.innerHTML = '';
    display.scrollTop = 0;
    megaMenu[cat][sub].forEach(item => {
        let div = document.createElement('div');
        div.className = 'item-card';
        div.onclick = () => addToCart(item.name, item.price);
        div.innerHTML = `<b>${item.name}</b><br><span style="color:#27ae60">${item.price.toFixed(2)}€</span>`;
        display.appendChild(div);
    });
}

function addToCart(name, price) {
    if (!tableOrders[activeTable]) tableOrders[activeTable] = [];
    tableOrders[activeTable].push({name, price});
    localStorage.setItem('sor_orders', JSON.stringify(tableOrders));
    updateCartUI();
}

function updateCartUI() {
    const order = tableOrders[activeTable] || [];
    const total = order.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-total-info').innerText = `${order.length} Items | Total: ${total.toFixed(2)}€`;
}
