 const menuData = [
    // ANTIPASTI
    { name: "Bruschetta Classic", cat: "Antipasti", price: 8.50 },
    { name: "Focaccia", cat: "Antipasti", price: 6.50 },
    { name: "Pizzabrötchen (8 Stk)", cat: "Antipasti", price: 5.50 },
    { name: "Caprese", cat: "Antipasti", price: 12.50 },
    { name: "Antipasto Vegetale", cat: "Antipasti", price: 11.50 },
    
    // SALATE
    { name: "Insalata Mista", cat: "Salate", price: 9.00 },
    { name: "Insalata Pollo", cat: "Salate", price: 12.50 },
    
    // VEGANER SALAT
    { name: "V. Insalata Mista", cat: "Veganer Salat", price: 9.00 },
    { name: "V. Insalata Pollo", cat: "Veganer Salat", price: 15.50 },

    // PIZZA (ALL)
    { name: "Pizza Margherita", cat: "Pizza", price: 10.50 },
    { name: "Pizza Salami", cat: "Pizza", price: 12.00 },
    { name: "Pizza Funghi", cat: "Pizza", price: 12.00 },
    { name: "Pizza Hawaii", cat: "Pizza", price: 13.00 },
    { name: "Pizza Amsterdam", cat: "Pizza", price: 17.50 },
    { name: "Pizza Calzone", cat: "Pizza", price: 15.00 },

    // VEGANE PIZZA (ALL)
    { name: "V. Pizza Margherita", cat: "Vegane Pizza", price: 12.50 },
    { name: "V. Pizza Salami", cat: "Vegane Pizza", price: 14.50 },
    { name: "V. Pizza Amsterdam", cat: "Vegane Pizza", price: 20.50 },

    // PASTA
    { name: "Spaghetti Napoli", cat: "Pasta", price: 12.00 },
    { name: "Spaghetti Bolognese", cat: "Pasta", price: 15.50 },
    { name: "Tagliatelle Salmone", cat: "Pasta", price: 19.50 },

    // VEGANE PASTA
    { name: "V. Spaghetti Bolognese", cat: "Vegane Pasta", price: 18.50 },

    // AL FORNO
    { name: "Hausgem. Lasagne", cat: "Al Forno", price: 16.50 },
    { name: "Rigatoni al Forno", cat: "Al Forno", price: 16.50 },

    // VEGAN AL FORNO
    { name: "V. Hausgem. Lasagne", cat: "Vegan Al Forno", price: 19.50 },

    // DESSERT
    { name: "Hausgem. Tiramisu", cat: "Dessert", price: 8.00 },

    // VEGANES DESSERT
    { name: "V. Cheesecake Himbeer", cat: "Veganes Dessert", price: 8.50 },

    // DRINKS
    { name: "Espresso", cat: "Drinks", price: 2.50 },
    { name: "Cappuccino", cat: "Drinks", price: 3.50 },
    { name: "Latte Macchiato", cat: "Drinks", price: 4.50 },
    { name: "Cola 0.33l", cat: "Drinks", price: 3.50 },
    { name: "Pils 0.3l", cat: "Drinks", price: 4.50 },
    { name: "Hauswein Rot 0.2l", cat: "Drinks", price: 6.50 }
];

let cart = [];
let currentTable = 0;

// 1. Logo Timer (9 Seconds)
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'block';
}, 9000);

// 2. Setup Tables 1-15
const tGrid = document.getElementById('table-grid');
for (let i = 1; i <= 15; i++) {
    const b = document.createElement('button');
    b.className = 't-btn';
    b.innerText = i;
    b.onclick = () => openMenu(i);
    tGrid.appendChild(b);
}

function openMenu(num) {
    currentTable = num;
    document.getElementById('active-table').innerText = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    setupCategories();
    renderItems('Antipasti');
}

function setupCategories() {
    const cats = ["Antipasti", "Salate", "Veganer Salat", "Pizza", "Vegane Pizza", "Pasta", "Vegane Pasta", "Al Forno", "Vegan Al Forno", "Dessert", "Veganes Dessert", "Drinks"];
    const scroll = document.getElementById('cat-scroll');
    scroll.innerHTML = '';
    cats.forEach(c => {
        const d = document.createElement('div');
        d.className = 'cat-dot';
        d.innerText = c;
        d.onclick = () => {
            document.querySelectorAll('.cat-dot').forEach(x => x.classList.remove('active'));
            d.classList.add('active');
            renderItems(c);
        };
        scroll.appendChild(d);
    });
}

function renderItems(cat) {
    const list = document.getElementById('item-list');
    list.innerHTML = '';
    menuData.filter(i => i.cat === cat).forEach(item => {
        list.innerHTML += `
            <div class="food-item">
                <div style="text-align:left;"><b>${item.name}</b><br><span style="color:#DAAB2D">${item.price.toFixed(2)}€</span></div>
                <button class="t-btn" style="width:50px; height:50px;" onclick="add('${item.name}', ${item.price})">+</button>
            </div>`;
    });
}

function add(n, p) {
    cart.push({n, p});
    const total = cart.reduce((s, i) => s + i.p, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function showTableScreen() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'block';
}

function resetCart() { cart = []; document.getElementById('cart-total').innerText="0.00"; }

// RECEIPT LOGIC
function generateText() {
    let t = `SORRENTINO\nTisch ${currentTable}\n----------\n`;
    cart.forEach(i => t += `${i.n} - ${i.p.toFixed(2)}€\n`);
    t += `----------\nGESAMT: ${document.getElementById('cart-total').innerText}€`;
    return t;
}

function printReceipt() {
    document.getElementById('print-layout').innerText = generateText();
    window.print();
}

async function shareReceipt() {
    const data = { title: 'Sorrentino Beleg', text: generateText() };
    if (navigator.share) await navigator.share(data);
    else alert("Nicht unterstützt");
}
