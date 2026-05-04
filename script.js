 const menuData = [
    // --- ANTIPASTI ---
    { name: "Bruschetta Classic", cat: "Antipasti", price: 8.50 },
    { name: "Focaccia", cat: "Antipasti", price: 6.50 },
    { name: "Pizzabrötchen (8 Stk)", cat: "Antipasti", price: 5.50 },
    { name: "Caprese", cat: "Antipasti", price: 12.50 },
    { name: "Carpaccio di Manzo", cat: "Antipasti", price: 14.00 },
    { name: "Carpaccio di Pesce", cat: "Antipasti", price: 14.50 },
    { name: "Ziegenkäse (Honig/Nüsse)", cat: "Antipasti", price: 15.50 },
    { name: "Antipasto Italiano", cat: "Antipasti", price: 24.50 },
    { name: "Antipasto Vegetale", cat: "Antipasti", price: 11.50 },

    // --- SALATE ---
    { name: "Insalata Mista", cat: "Salate", price: 9.00 },
    { name: "Insalata Pomodoro", cat: "Salate", price: 7.50 },
    { name: "Insalata Rucola", cat: "Salate", price: 10.50 },
    { name: "Insalata Contadina", cat: "Salate", price: 12.50 },
    { name: "Insalata Pollo", cat: "Salate", price: 12.50 },
    { name: "Insalata Salmone", cat: "Salate", price: 15.50 },
    { name: "Insalata Capricciosa", cat: "Salate", price: 14.50 },

    // --- VEGANER SALAT ---
    { name: "V. Insalata Mista", cat: "Veganer Salat", price: 9.00 },
    { name: "V. Insalata Contadina", cat: "Veganer Salat", price: 15.50 },
    { name: "V. Insalata Rucola", cat: "Veganer Salat", price: 12.50 },
    { name: "V. Insalata Pollo", cat: "Veganer Salat", price: 15.50 },
    { name: "V. Insalata Salmone", cat: "Veganer Salat", price: 16.50 },

    // --- PIZZA KLASSISCH ---
    { name: "Pizza Margherita", cat: "Pizza", price: 10.50 },
    { name: "Pizza Bufalina", cat: "Pizza", price: 12.00 },
    { name: "Pizza Primavera", cat: "Pizza", price: 12.00 },
    { name: "Pizza Salami", cat: "Pizza", price: 12.00 },
    { name: "Pizza Prosciutto", cat: "Pizza", price: 12.00 },
    { name: "Pizza Funghi", cat: "Pizza", price: 12.00 },
    { name: "Pizza Pugliese", cat: "Pizza", price: 14.00 },
    { name: "Pizza Inferno", cat: "Pizza", price: 13.00 },
    { name: "Pizza Spinaci", cat: "Pizza", price: 12.00 },
    { name: "Pizza Prosc. e Funghi", cat: "Pizza", price: 13.50 },
    { name: "Pizza Tonno", cat: "Pizza", price: 13.50 },
    { name: "Pizza Hawaii", cat: "Pizza", price: 13.00 },
    { name: "Pizza Verdura", cat: "Pizza", price: 14.50 },
    { name: "Pizza Quattro Stagioni", cat: "Pizza", price: 14.50 },
    { name: "Pizza Quattro Formaggi", cat: "Pizza", price: 14.50 },
    { name: "Pizza Rustica", cat: "Pizza", price: 14.50 },
    { name: "Pizza Frutti di Mare", cat: "Pizza", price: 14.50 },
    { name: "Pizza Melanzane", cat: "Pizza", price: 15.50 },
    { name: "Pizza Chef", cat: "Pizza", price: 15.50 },
    { name: "Pizza Salmone", cat: "Pizza", price: 16.50 },
    { name: "Pizza Parma", cat: "Pizza", price: 16.50 },
    { name: "Pizza Salvatore", cat: "Pizza", price: 16.50 },
    { name: "Pizza Pollo", cat: "Pizza", price: 16.50 },
    { name: "Pizza Amsterdam", cat: "Pizza", price: 17.50 },
    { name: "Pizza Chiara", cat: "Pizza", price: 18.50 },
    { name: "Pizza Calzone", cat: "Pizza", price: 15.00 },

    // --- VEGANE PIZZA ---
    { name: "V. Pizza Margherita", cat: "Vegane Pizza", price: 12.50 },
    { name: "V. Pizza Salami", cat: "Vegane Pizza", price: 14.50 },
    { name: "V. Pizza Funghi", cat: "Vegane Pizza", price: 14.00 },
    { name: "V. Pizza Tonno", cat: "Vegane Pizza", price: 15.50 },
    { name: "V. Pizza Hawaii", cat: "Vegane Pizza", price: 15.50 },
    { name: "V. Pizza Verdura", cat: "Vegane Pizza", price: 16.50 },
    { name: "V. Pizza Amsterdam", cat: "Vegane Pizza", price: 20.50 },
    { name: "V. Pizza Calzone", cat: "Vegane Pizza", price: 18.50 },

    // --- PASTA KLASSISCH ---
    { name: "Spaghetti Napoli", cat: "Pasta", price: 12.00 },
    { name: "Spaghetti Bolognese", cat: "Pasta", price: 15.50 },
    { name: "Spaghetti Aglio Olio", cat: "Pasta", price: 12.00 },
    { name: "Spaghetti Carbonara", cat: "Pasta", price: 16.50 },
    { name: "Tortellini Panna Prosc.", cat: "Pasta", price: 15.50 },
    { name: "Penne Arrabbiata", cat: "Pasta", price: 13.00 },
    { name: "Rigatoni Gorgonzola", cat: "Pasta", price: 15.50 },
    { name: "Tagliatelle Salmone", cat: "Pasta", price: 19.50 },
    { name: "Tagliatelle di Manzo", cat: "Pasta", price: 20.50 },

    // --- VEGANE PASTA ---
    { name: "V. Spaghetti Napoli", cat: "Vegane Pasta", price: 13.50 },
    { name: "V. Spaghetti Bolognese", cat: "Vegane Pasta", price: 18.50 },
    { name: "V. Penne Arrabbiata", cat: "Vegane Pasta", price: 14.50 },
    { name: "V. Tagliatelle Salmone", cat: "Vegane Pasta", price: 20.50 },

    // --- AL FORNO ---
    { name: "Lasagne Klassisch", cat: "Al Forno", price: 16.50 },
    { name: "Rigatoni al Forno", cat: "Al Forno", price: 16.50 },
    { name: "V. Lasagne Vegan", cat: "Vegan Al Forno", price: 19.50 },

    // --- DESSERT ---
    { name: "Hausgem. Tiramisu", cat: "Dessert", price: 8.00 },
    { name: "Schoko Souffle", cat: "Dessert", price: 7.00 },
    { name: "V. Tiramisu Vegan", cat: "Veganes Dessert", price: 8.50 },

    // --- DRINKS ---
    { name: "Espresso", cat: "Drinks", price: 2.50 },
    { name: "Cappuccino", cat: "Drinks", price: 3.50 },
    { name: "Cola / Fanta 0.33l", cat: "Drinks", price: 3.50 },
    { name: "San Pellegrino 0.75l", cat: "Drinks", price: 6.50 },
    { name: "Pils 0.3l", cat: "Drinks", price: 4.50 },
    { name: "Hauswein 0.2l", cat: "Drinks", price: 6.50 }
];

let tableStatuses = JSON.parse(localStorage.getItem('sorrent_status')) || Array(16).fill(0);
let tableOrders = JSON.parse(localStorage.getItem('sorrent_orders')) || Array(16).fill([]);
let currentTable = 0;

// --- CRITICAL FIX: Intro to Table Screen logic ---
window.onload = () => {
    // Show intro screen first
    const intro = document.getElementById('intro-screen');
    const tables = document.getElementById('table-screen');
    const menu = document.getElementById('menu-screen');

    // Reset views just in case
    intro.style.display = 'flex';
    tables.style.display = 'none';
    menu.style.display = 'none';

    setTimeout(() => {
        intro.style.display = 'none';
        tables.style.display = 'block';
        renderTables();
    }, 5000); // 5 Seconds
};

function renderTables() {
    const grid = document.getElementById('table-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const btn = document.createElement('button');
        const status = tableStatuses[i];
        btn.className = `t-btn ${status === 0 ? 't-available' : (status === 1 ? 't-active' : 't-paid')}`;
        btn.innerText = i;
        btn.onclick = () => openTable(i);
        grid.appendChild(btn);
    }
}

function openTable(num) {
    currentTable = num;
    document.getElementById('active-table-num').innerText = num;
    document.getElementById('table-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    
    if (!tableOrders[currentTable]) tableOrders[currentTable] = [];
    
    setupCategories();
    loadCategory('Antipasti'); // Default category
    updateCartTotal();
}

function setupCategories() {
    // Get unique categories from menuData
    const cats = [...new Set(menuData.map(item => item.cat))];
    const container = document.getElementById('cat-circles');
    container.innerHTML = '';
    
    cats.forEach(c => {
        const div = document.createElement('div');
        div.className = 'cat-dot';
        div.innerText = c;
        div.onclick = () => {
            document.querySelectorAll('.cat-dot').forEach(d => d.classList.remove('active'));
            div.classList.add('active');
            loadCategory(c);
        };
        container.appendChild(div);
    });
}

function loadCategory(cat) {
    const list = document.getElementById('item-list');
    list.innerHTML = '';
    menuData.filter(i => i.cat === cat).forEach(item => {
        list.innerHTML += `
            <div class="item-row">
                <div><b>${item.name}</b><br><small>${item.price.toFixed(2)}€</small></div>
                <button class="t-btn" style="width:55px;height:55px;font-size:1.5rem;" onclick="addToCart('${item.name}', ${item.price})">+</button>
            </div>`;
    });
}

function addToCart(name, price) {
    tableOrders[currentTable].push({name, price});
    tableStatuses[currentTable] = 1; // Red
    save();
    updateCartTotal();
}

function updateCartTotal() {
    const total = tableOrders[currentTable].reduce((sum, i) => sum + i.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function showTableScreen() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('table-screen').style.display = 'block';
    renderTables();
}

function markAsPaid() {
    tableStatuses[currentTable] = 2; // Blue
    save();
    showTableScreen();
}

function clearTable() {
    if(confirm("Tisch leeren?")) {
        tableStatuses[currentTable] = 0; // Green
        tableOrders[currentTable] = [];
        save();
        showTableScreen();
    }
}

function save() {
    localStorage.setItem('sorrent_status', JSON.stringify(tableStatuses));
    localStorage.setItem('sorrent_orders', JSON.stringify(tableOrders));
}

function printReceipt() {
    window.print();
}
