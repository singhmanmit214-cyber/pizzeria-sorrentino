 const menuData = [
    // --- PIZZA ---
    { name: "Pizza Margherita", cat: "Pizza", price: 10.50, desc: "Tomatensauce, Mozzarella & Oregano" },
    { name: "Pizza Salami", cat: "Pizza", price: 12.00, desc: "mit Rindersalami" },
    { name: "Pizza Prosciutto", cat: "Pizza", price: 12.00, desc: "mit Edelschinken" },
    { name: "Pizza Funghi", cat: "Pizza", price: 12.00, desc: "mit frischen Champignons" },
    { name: "Pizza Tonno", cat: "Pizza", price: 13.50, desc: "Thunfisch & Zwiebeln" },
    { name: "Pizza Hawaii", cat: "Pizza", price: 13.00, desc: "Schinken & Ananas" },
    { name: "Pizza Amsterdam", cat: "Pizza", price: 17.50, desc: "Hähnchen, Broccoli & Hollandaise" },
    { name: "Pizza Chiara", cat: "Pizza", price: 18.50, desc: "Scharfe Salami, Auberginen, Büffelmozzarella" },
    { name: "Pizza Di Capra", cat: "Pizza", price: 18.00, desc: "Ziegenkäse, Honig & Pinienkerne" },

    // --- AL FORNO (Überbacken) ---
    { name: "Hausgemachte Lasagne", cat: "Al Forno", price: 16.50, desc: "Rinderhackfleischsauce & Käse" },
    { name: "Hausgemachte Cannelloni", cat: "Al Forno", price: 17.50, desc: "Hackfleischfüllung & Sahne" },
    { name: "Penne al Forno", cat: "Al Forno", price: 15.50, desc: "Bolognese-Sahnesauce & Käse" },
    { name: "Auflauf Spezial", cat: "Al Forno", price: 17.50, desc: "Hähnchen, Broccoli, Kartoffeln & Hollandaise" },

    // --- PASTA ---
    { name: "Spaghetti Napoli", cat: "Pasta", price: 12.00, desc: "Frische Tomatensauce & Basilikum" },
    { name: "Spaghetti Bolognese", cat: "Pasta", price: 15.50, desc: "100% Rinderhackfleisch" },
    { name: "Spaghetti Carbonara", cat: "Pasta", price: 16.50, desc: "Speck, Ei & Parmesan" },
    { name: "Tagliatelle Salmone", cat: "Pasta", price: 19.50, desc: "Lachsstreifen & Sahnesauce" },
    { name: "Tagliatelle di Manzo", cat: "Pasta", price: 20.50, desc: "Rinderfiletspitzen & Rucola" },

    // --- VEGAN SECTIONS ---
    { name: "V. Pizza Margherita", cat: "Vegan", price: 12.50, desc: "Vegane Tomatensauce & Käse" },
    { name: "V. Pizza Salami", cat: "Vegan", price: 14.50, desc: "mit veganer Salami" },
    { name: "V. Pizza Amsterdam", cat: "Vegan", price: 20.50, desc: "Veg. Hähnchen & Hollandaise" },
    { name: "V. Spaghetti Bolognese", cat: "Vegan", price: 18.50, desc: "Hausgemachtes veganes Hack" },
    { name: "V. Rigatoni al Forno", cat: "Vegan", price: 18.50, desc: "Überbacken mit veganem Käse" },
    { name: "V. Tiramisu", cat: "Vegan", price: 8.50, desc: "Mandelbasis, 100% Vegan" },

    // --- DRINKS ---
    { name: "Cola / Fanta / Spezi", cat: "Drinks", price: 3.50, desc: "0.33l Glas" },
    { name: "San Pellegrino", cat: "Drinks", price: 6.50, desc: "0.75l Flasche" },
    { name: "Pils vom Fass", cat: "Drinks", price: 4.50, desc: "0.3l Frisch gezapft" },
    { name: "Aperol Spritz", cat: "Drinks", price: 8.50, desc: "Prosecco & Aperol" },
    { name: "Espresso", cat: "Drinks", price: 2.50, desc: "Premium Roast" }
];

let cart = [];
let currentTable = 0;

// Initialize Tables
const grid = document.getElementById('table-grid');
if (grid) {
    for (let i = 1; i <= 15; i++) {
        const btn = document.createElement('button');
        btn.className = 'table-btn';
        btn.innerText = i;
        btn.onclick = () => startMenu(i);
        grid.appendChild(btn);
    }
}

function startMenu(tableNum) {
    currentTable = tableNum;
    document.getElementById('selected-table').innerText = tableNum;
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
    filterMenu('Pizza');
}

function filterMenu(category, event) {
    const tabs = document.querySelectorAll('.cat-item');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText === category) tab.classList.add('active');
    });

    const list = document.getElementById('food-list');
    list.innerHTML = '';
    const filtered = menuData.filter(item => item.cat === category);
    
    filtered.forEach(item => {
        list.innerHTML += `
            <div class="food-card">
                <div>
                    <div class="food-name">${item.name}</div>
                    <div class="food-desc">${item.desc}</div>
                    <div class="price">${item.price.toFixed(2)}€</div>
                </div>
                <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">+</button>
            </div>`;
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function printReceipt() {
    if (cart.length === 0) return alert("Warenkorb leer!");
    document.getElementById('r-table').innerText = currentTable;
    const rItems = document.getElementById('r-items');
    rItems.innerHTML = '';
    cart.forEach(item => {
        rItems.innerHTML += `<div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ccc; padding:5px 0;">
            <span>${item.name}</span><span>${item.price.toFixed(2)}€</span>
        </div>`;
    });
    document.getElementById('r-total').innerText = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2) + "€";
    window.print();
}

function downloadReceipt() {
    if (cart.length === 0) return alert("Warenkorb leer!");
    const content = `SORRENTINO\nTisch: ${currentTable}\n----------------\n` + 
                    cart.map(i => `${i.name}: ${i.price.toFixed(2)}€`).join('\n') + 
                    `\n----------------\nTOTAL: ${document.getElementById('cart-total').innerText}€`;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Sorrentino_Tisch${currentTable}.txt`;
    a.click();
}

function resetApp() {
    if (confirm("Bestellung löschen?")) {
        cart = [];
        updateTotal();
        document.getElementById('menu-screen').style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'flex';
    }
}
