 // --- COMPLETE MENU DATABASE ---
const menuData = [
    // --- ANTIPASTI & INSALATE ---
    { id: 1, name: "Bruschetta Classic (4 Stk.)", category: "Antipasti", price: 8.50, description: "mit Tomaten, Knoblauch, Basilikum" },
    { id: 2, name: "Focaccia", category: "Antipasti", price: 6.50, description: "Hausgemachtes Brot mit Rosmarin" },
    { id: 3, name: "Pizzabrötchen (8 Stk.)", category: "Antipasti", price: 5.50, description: "mit Kräuterbutter" },
    { id: 4, name: "Caprese", category: "Antipasti", price: 12.50, description: "Büffelmozzarella, Tomaten, Basilikum" },
    { id: 5, name: "Carpaccio di Manzo", category: "Antipasti", price: 14.00, description: "Hauchdünnes Rinderfilet, Parmesan, Rucola" },
    { id: 6, name: "Carpaccio di Pesce", category: "Antipasti", price: 14.50, description: "Hauchdünner Fisch nach Art des Hauses" },
    { id: 7, name: "Ziegenkäse", category: "Antipasti", price: 15.50, description: "mit Honig und Walnüssen" },
    { id: 8, name: "Antipasto Italiano (2 Pers.)", category: "Antipasti", price: 24.50, description: "Gemischte Vorspeisenplatte" },
    { id: 9, name: "Antipasto Vegetale", category: "Antipasti", price: 11.50, description: "Vegetarische Vorspeisenplatte" },
    { id: 10, name: "Insalata Mista", category: "Salate", price: 9.00, description: "Gemischter Saisonsalat" },
    { id: 11, name: "Insalata Pollo", category: "Salate", price: 12.50, description: "Salat mit Hähnchenbrust" },
    { id: 12, name: "Insalata Salmone", category: "Salate", price: 15.50, description: "Salat mit Lachsstreifen" },
    { id: 13, name: "Insalata Capricciosa", category: "Salate", price: 14.50, description: "Salat mit Schinken, Käse, Ei, Oliven" },

    // --- PIZZA CLASSIC ---
    { id: 100, name: "Pizza Margherita", category: "Pizza", price: 10.50, description: "Tomatensauce, Mozzarella" },
    { id: 101, name: "Pizza Bufalina", category: "Pizza", price: 12.00, description: "mit Büffelmozzarella" },
    { id: 102, name: "Pizza Salami", category: "Pizza", price: 12.00, description: "Rindersalami" },
    { id: 103, name: "Pizza Prosciutto", category: "Pizza", price: 12.00, description: "Edelschinken" },
    { id: 104, name: "Pizza Funghi", category: "Pizza", price: 12.00, description: "Frische Champignons" },
    { id: 105, name: "Pizza Inferno", category: "Pizza", price: 13.00, description: "Scharfe Salami" },
    { id: 106, name: "Pizza Tonno", category: "Pizza", price: 13.50, description: "Thunfisch, Zwiebeln" },
    { id: 107, name: "Pizza Hawaii", category: "Pizza", price: 13.00, description: "Schinken, Ananas" },
    { id: 108, name: "Pizza Quattro Stagioni", category: "Pizza", price: 14.50, description: "Schinken, Salami, Pilze, Thunfisch" },
    { id: 109, name: "Pizza Verdura", category: "Pizza", price: 14.50, description: "Frisches Gemüse, Knoblauch" },
    { id: 110, name: "Pizza Amsterdam", category: "Pizza", price: 17.50, description: "Hähnchen, Hollandaise, Brokkoli" },
    { id: 111, name: "Pizza Chiara", category: "Pizza", price: 18.50, description: "Scharfe Salami, Auberginen, Büffelmozzarella" },
    { id: 112, name: "Pizza Calzone", category: "Pizza", price: 15.00, description: "Gefüllte Pizza" },

    // --- PASTA ---
    { id: 200, name: "Spaghetti Napoli", category: "Pasta", price: 12.00, description: "Tomatensauce, Basilikum" },
    { id: 201, name: "Spaghetti Bolognese", category: "Pasta", price: 15.50, description: "Rinder-Hackfleischsauce" },
    { id: 202, name: "Spaghetti Carbonara", category: "Pasta", price: 16.50, description: "Guanciale Speck, Ei, Parmesan" },
    { id: 203, name: "Penne Arrabbiata", category: "Pasta", price: 13.00, description: "Scharfe Tomatensauce" },
    { id: 204, name: "Rigatoni Norcina", category: "Pasta", price: 16.50, description: "Balsamico-Sahne, Hähnchen, Pilze" },
    { id: 205, name: "Tagliatelle di Manzo", category: "Pasta", price: 20.50, description: "Rinderfiletspitzen, Rucola" },
    { id: 206, name: "Lasagne Hausgemacht", category: "Pasta", price: 16.50, description: "mit Rinderhack überbacken" },

    // --- VEGANE OPTIONEN ---
    { id: 300, name: "Vegane Pizza Margherita", category: "Vegan", price: 12.50, description: "mit veganem Käse" },
    { id: 301, name: "Vegane Spaghetti Bolognese", category: "Vegan", price: 18.50, description: "mit veganem Hack" },
    { id: 302, name: "Vegane Tagliatelle Salmone", category: "Vegan", price: 20.50, description: "mit veganem Lachs" },

    // --- CARNE & PESCE ---
    { id: 400, name: "Schnitzel Wiener Art", category: "Fleisch/Fisch", price: 15.50, description: "mit Pommes" },
    { id: 401, name: "Rinderfilet vom Grill", category: "Fleisch/Fisch", price: 30.50, description: "Arg. Rinderfilet" },
    { id: 402, name: "Salmone Griglia", category: "Fleisch/Fisch", price: 25.50, description: "Gegrillter Lachs" },
    { id: 403, name: "Calamari Fritti", category: "Fleisch/Fisch", price: 20.00, description: "Frittierte Tintenfischringe" },

    // --- DESSERT ---
    { id: 500, name: "Hausgemachtes Tiramisu", category: "Dessert", price: 8.00, description: "Klassisch italienisch" },
    { id: 501, name: "Schoko Souffle", category: "Dessert", price: 7.00, description: "mit flüssigem Kern" },
    { id: 502, name: "Veganer Cheesecake", category: "Dessert", price: 8.50, description: "mit Himbeeren" },

    // --- GETRÄNKE ---
    { id: 600, name: "Coca Cola / Zero / Light", category: "Getränke", price: 3.50, description: "0,33l Glasflasche" },
    { id: 601, name: "Fanta / Sprite", category: "Getränke", price: 3.50, description: "0,33l Glasflasche" },
    { id: 602, name: "Wasser Still/Sprudel (0,25l)", category: "Getränke", price: 3.00, description: "Kleine Flasche" },
    { id: 603, name: "Wasser Still/Sprudel (0,75l)", category: "Getränke", price: 6.50, description: "Große Flasche" },
    { id: 604, name: "Kölsch 0,2l", category: "Getränke", price: 2.20, description: "Frisch vom Fass" },
    { id: 605, name: "Kölsch 0,3l", category: "Getränke", price: 3.30, description: "Frisch vom Fass" },
    { id: 606, name: "Weizenbier 0,5l", category: "Getränke", price: 5.50, description: "mit/ohne Alkohol" },
    { id: 607, name: "Aperol / Limoncello Spritz", category: "Getränke", price: 8.50, description: "Spritzige Longdrinks" },
    { id: 608, name: "Espresso / Kaffee", category: "Getränke", price: 2.50, description: "Italienische Röstung" },
    { id: 609, name: "Hauswein (Rot/Weiß/Rosé)", category: "Getränke", price: 6.50, description: "0,2l Glas" }
];

let cart = [];
let selectedTable = "";

// --- INITIALIZE THE 15 TABLE CIRCLES ---
window.onload = function() {
    const grid = document.getElementById('tableGrid');
    if (grid) {
        for (let i = 1; i <= 15; i++) {
            let circle = document.createElement('div');
            circle.className = 'table-circle';
            circle.innerText = i;
            circle.onclick = () => selectTable(i);
            grid.appendChild(circle);
        }
    }
};

function selectTable(num) {
    selectedTable = num;
    document.getElementById('activeTable').innerText = num;
    document.getElementById('summaryTable').innerText = num;
    document.getElementById('tableSelection').style.display = 'none';
    document.getElementById('menuContent').style.display = 'block';
    renderMenu('Antipasti'); // Standard start category
}

function renderMenu(cat) {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';
    const items = menuData.filter(i => i.category === cat);
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="menu-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>${item.price.toFixed(2)}€</span>
                </div>
                <button class="add-btn" onclick="addToCart(${item.id})">+</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    updateCartBar();
}

function updateCartBar() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').innerText = total.toFixed(2);
    document.getElementById('cartCount').innerText = cart.length;
}

function openSummary() {
    if (cart.length === 0) return alert("Warenkorb leer!");
    document.getElementById('orderModal').style.display = 'flex';
    const rItems = document.getElementById('rItems');
    
    const total = cart.reduce((s, i) => s + i.price, 0);
    const tax = total - (total / 1.07);

    rItems.innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
            <span>1x ${i.name}</span>
            <span>${i.price.toFixed(2)}€</span>
        </div>
    `).join('') + `
        <div style="border-top:1px dashed #ccc; margin-top:10px; padding-top:10px; font-size:0.8rem; color:#666;">
            <div style="display:flex; justify-content:space-between;"><span>inkl. 7% MwSt.</span> <span>${tax.toFixed(2)}€</span></div>
        </div>
    `;
    
    document.getElementById('rTotal').innerText = total.toFixed(2);
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function printReceipt() {
    const total = cart.reduce((s, i) => s + i.price, 0);
    const tax = total - (total / 1.07);
    const date = new Date().toLocaleString('de-DE');
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <body style="font-family:monospace; padding:20px; text-align:center; width:280px; margin:auto; border:1px solid #ddd;">
            <h2>SORRENTINO</h2>
            <p>Pizzeria - Trattoria<br>${date}</p>
            <hr>
            <p><strong>TISCH: ${selectedTable}</strong></p>
            <hr>
            <div style="text-align:left;">
                ${cart.map(i => `<div style="display:flex;justify-content:space-between;"><span>1x ${i.name}</span> <span>${i.price.toFixed(2)}€</span></div>`).join('')}
            </div>
            <hr>
            <h3 style="display:flex;justify-content:space-between;"><span>TOTAL:</span> <span>${total.toFixed(2)}€</span></h3>
            <p style="font-size:10px;">Netto: ${(total - tax).toFixed(2)}€<br>MwSt 7%: ${tax.toFixed(2)}€</p>
            <p>Vielen Dank für Ihren Besuch!</p>
            <script>window.print(); setTimeout(() => window.close(), 500);</script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
