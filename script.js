 // --- DATABASE ---
const menuData = [
    // PIZZA (Prices from your menu photos)
    { id: 1, name: "Pizza Margherita", category: "Pizza", price: 10.50, description: "Tomatensauce, Mozzarella, Oregano" },
    { id: 2, name: "Pizza Salami", category: "Pizza", price: 12.00, description: "Rindersalami" },
    { id: 3, name: "Pizza Prosciutto", category: "Pizza", price: 12.00, description: "Edelschinken" },
    { id: 4, name: "Pizza Funghi", category: "Pizza", price: 11.00, description: "Frische Champignons" },
    { id: 5, name: "Pizza Tonno", category: "Pizza", price: 13.00, description: "Thunfisch, Zwiebeln" },
    { id: 6, name: "Pizza Inferno", category: "Pizza", price: 13.00, description: "Scharfe Salami" },
    { id: 7, name: "Pizza Amsterdam", category: "Pizza", price: 17.50, description: "Hähnchen, Sauce Hollandaise, Brokkoli" },
    { id: 8, name: "Pizza Chiara", category: "Pizza", price: 18.50, description: "Scharfe Salami, Auberginen, Pinienkerne" },

    // PASTA
    { id: 101, name: "Spaghetti Napoli", category: "Pasta", price: 12.00, description: "Tomatensauce, Basilikum" },
    { id: 102, name: "Spaghetti Bolognese", category: "Pasta", price: 15.50, description: "Hausgemachte Rinderhackfleischsauce" },
    { id: 103, name: "Spaghetti Carbonara", category: "Pasta", price: 16.50, description: "Guanciale Speck, Ei, Parmesan" },
    { id: 104, name: "Tagliatelle di Manzo", category: "Pasta", price: 20.50, description: "Rinderfiletspitzen, Rucola" },

    // SALATE
    { id: 201, name: "Insalata Mista", category: "Salat", price: 9.00, description: "Gemischter Saisonsalat" },
    { id: 202, name: "Insalata Pollo", category: "Salat", price: 12.50, description: "Salat mit Hähnchenbrust" },
    { id: 203, name: "Insalata Salmone", category: "Salat", price: 16.50, description: "Salat mit Lachsstreifen" },

    // GETRÄNKE - SOFTDRINKS
    { id: 501, name: "Coca Cola / Zero / Light", category: "Getränke", price: 3.50, description: "0,33l Glasflasche" },
    { id: 502, name: "Fanta / Sprite", category: "Getränke", price: 3.50, description: "0,33l Glasflasche" },
    { id: 503, name: "Apfelschorle", category: "Getränke", price: 3.50, description: "0,33l" },
    { id: 504, name: "Wasser Still (Klein/Groß)", category: "Getränke", price: 3.00, description: "0,25l / 0,75l verfügbar" },
    { id: 505, name: "Wasser Sprudel (Klein/Groß)", category: "Getränke", price: 3.00, description: "0,25l / 0,75l verfügbar" },

    // BIERE
    { id: 601, name: "Kölsch (0,2l / 0,3l)", category: "Getränke", price: 2.20, description: "Frisch vom Fass" },
    { id: 602, name: "Weizenbier / Alkoholfrei", category: "Getränke", price: 5.50, description: "0,5l Flasche" },
    { id: 603, name: "Jever / Jever Fun", category: "Getränke", price: 3.80, description: "Pils 0,33l" },

    // SPIRITZ & HOT
    { id: 701, name: "Aperol Spritz / Limoncello Spritz", category: "Getränke", price: 8.50, description: "Erfrischender Aperitif" },
    { id: 702, name: "Kaffeespezialitäten", category: "Getränke", price: 3.20, description: "Espresso, Cappuccino, Latte Macchiato" },

    // WEINE
    { id: 801, name: "Weine (Rot / Weiß / Rosé)", category: "Getränke", price: 6.50, description: "0,2l Qualitätsweine" }
];

let cart = [];
let selectedTable = "";

// --- ON LOAD: BUILD THE 15 CIRCLES ---
window.onload = function() {
    const grid = document.getElementById('tableGrid');
    for (let i = 1; i <= 15; i++) {
        let circle = document.createElement('div');
        circle.className = 'table-circle';
        circle.innerText = i;
        circle.onclick = () => selectTable(i);
        grid.appendChild(circle);
    }
};

// --- TABLE SELECTION ---
function selectTable(num) {
    selectedTable = num;
    document.getElementById('activeTable').innerText = num;
    document.getElementById('summaryTable').innerText = num;
    document.getElementById('tableSelection').style.display = 'none';
    document.getElementById('menuContent').style.display = 'block';
    renderMenu('Pizza'); // Start with Pizza category
}

// --- RENDER MENU ITEMS ---
function renderMenu(cat) {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';
    const items = menuData.filter(i => i.category === cat);
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="menu-item" style="background:#1a1a1a; border: 1px solid #333; padding:15px; border-radius:10px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 style="margin:0; color:#fff;">${item.name}</h3>
                    <p style="margin:5px 0; color:#888; font-size:0.8rem;">${item.description}</p>
                    <span style="color:#d4af37; font-weight:bold;">${item.price.toFixed(2)}€</span>
                </div>
                <button onclick="addToCart(${item.id})" style="background:#d4af37; color:black; border:none; padding:10px 15px; border-radius:5px; font-weight:bold;">+</button>
            </div>
        `;
    });
}

// --- CART LOGIC ---
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
    const modal = document.getElementById('orderModal');
    const rItems = document.getElementById('rItems');
    modal.style.display = 'flex';
    
    rItems.innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #eee;">
            <span>1x ${i.name}</span>
            <span>${i.price.toFixed(2)}€</span>
        </div>
    `).join('');
    
    document.getElementById('rTotal').innerText = cart.reduce((s, i) => s + i.price, 0).toFixed(2);
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// --- WHATSAPP ORDER ---
function shareOrder() {
    const total = document.getElementById('rTotal').innerText;
    const items = cart.map(i => `• ${i.name}`).join('%0A');
    const msg = `*BESTELLUNG TISCH ${selectedTable}*%0A%0A${items}%0A%0A*Gesamt: ${total}€*`;
    
    // Replace the number below with your actual restaurant number
    window.open(`https://wa.me/4917600000000?text=${msg}`);
}

// --- CALL WAITER ---
function callWaiter() {
    const msg = `🔔 *Service benötigt an Tisch ${selectedTable}*`;
    window.open(`https://wa.me/4917600000000?text=${encodeURIComponent(msg)}`);
}
