 // AUTO LOGO
setTimeout(() => {
    document.getElementById('logo-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}, 1200);

// DATA
let tables = {}; 
let tableStatus = {}; 
let currentTable = 0;

// MENU
const menuData = [
    { name: "Cola", cat: "Drinks", price: 3.5 },
    { name: "Water", cat: "Drinks", price: 4.5 },
    { name: "Pizza Margherita", cat: "Pizza", price: 10.5 },
    { name: "Pizza Salami", cat: "Pizza", price: 12 },
    { name: "Spaghetti", cat: "Pasta", price: 12 }
];

// INIT TABLES
const grid = document.getElementById('table-grid');

for (let i = 1; i <= 15; i++) {
    tableStatus[i] = "empty";

    let btn = document.createElement('button');
    btn.innerText = i;
    btn.className = 'table-btn empty';
    btn.onclick = () => openTable(i);

    grid.appendChild(btn);
}

// OPEN TABLE
function openTable(t) {
    currentTable = t;

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    document.getElementById('selected-table').innerText = t;

    updateCart();
}

// CATEGORY
function selectMain(cat) {
    let list = document.getElementById('food-list');
    list.innerHTML = '';

    menuData.filter(i => i.cat === cat).forEach(i => {
        list.innerHTML += `
        <div class="food-card">
            <span>${i.name} - ${i.price}€</span>
            <button onclick="addToCart('${i.name}', ${i.price})">+</button>
        </div>`;
    });
}

// CART
function addToCart(name, price) {
    if (!tables[currentTable]) tables[currentTable] = [];

    let cart = tables[currentTable];
    let item = cart.find(i => i.name === name);

    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });

    tableStatus[currentTable] = "active";

    updateCart();
    updateTableColors();
}

function updateCart() {
    let cart = tables[currentTable] || [];
    let total = 0;

    let preview = document.getElementById('cart-preview');
    preview.innerHTML = '';

    cart.forEach(i => {
        let t = i.price * i.qty;
        total += t;

        preview.innerHTML += `
        <div>
            ${i.qty}x ${i.name} = ${t.toFixed(2)}€
        </div>`;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);
}

// TABLE COLORS
function updateTableColors() {
    let buttons = document.querySelectorAll('.table-btn');

    buttons.forEach((btn, index) => {
        let t = index + 1;
        btn.className = "table-btn " + tableStatus[t];
    });
}

// COMPLETE ORDER
function completeOrder() {
    if (!tables[currentTable]) return;

    tableStatus[currentTable] = "paid";
    updateTableColors();
    goBack();
}

// RESET TABLE
function resetTable() {
    delete tables[currentTable];
    tableStatus[currentTable] = "empty";

    updateTableColors();
    goBack();
}

// BACK
function goBack() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}

// PRINT
function printReceipt() {
    let cart = tables[currentTable] || [];
    if (cart.length === 0) return;

    let items = document.getElementById('r-items');
    items.innerHTML = '';

    let total = 0;

    cart.forEach(i => {
        let t = i.price * i.qty;
        total += t;

        items.innerHTML += `<div>${i.qty}x ${i.name} - ${t.toFixed(2)}€</div>`;
    });

    document.getElementById('r-table').innerText = currentTable;
    document.getElementById('r-total').innerText = total.toFixed(2) + "€";

    window.print();
}