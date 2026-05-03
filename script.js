const menuData = [
    // VORSPEISE (Antipasti)
    { id: 1, name: "Bruschetta Classic", category: "Vorspeise", price: 6.50, description: "Geröstetes Brot, Tomaten, Knoblauch" },
    { id: 2, name: "Caprese", category: "Vorspeise", price: 9.50, description: "Büffelmozzarella, Tomaten, Basilikum" },
    
    // HAUPTSPEISE (Pizza & Pasta)
    { id: 10, name: "Pizza Margherita", category: "Hauptspeise", price: 8.50, description: "Tomaten, Mozzarella, Basilikum" },
    { id: 11, name: "Pizza Salami", category: "Hauptspeise", price: 10.50, description: "Rindersalami, Mozzarella" },
    { id: 12, name: "Spaghetti Carbonara", category: "Hauptspeise", price: 12.00, description: "Speck, Ei, Pecorino" },
    
    // NACHTISCH (Dolci)
    { id: 20, name: "Tiramisu", category: "Nachtisch", price: 6.00, description: "Hausgemacht nach Familienrezept" },
    { id: 21, name: "Panna Cotta", category: "Nachtisch", price: 5.50, description: "Mit Fruchtspiegel" },
    
    // GETRÄNKE
    { id: 30, name: "Cola 0.33l", category: "Getränke", price: 3.50, description: "Eiskalt" },
    { id: 31, name: "Wasser 0.5l", category: "Getränke", price: 2.50, description: "Still/Sprudel" }
];

let cart = [];
let table = "";

function startOrdering() {
    table = document.getElementById('tableNumber').value;
    if(!table) return alert("Bitte Tisch wählen!");
    document.getElementById('activeTable').innerText = table;
    document.getElementById('tableSelection').style.display = 'none';
    document.getElementById('menuContent').style.display = 'block';
    renderMenu('Vorspeise'); // Open with Starters
}

function renderMenu(cat) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = `<h2 style="color:#d52b1e; border-bottom:2px solid #eee; padding-bottom:10px;">${cat}</h2>`;
    
    document.querySelectorAll('nav button').forEach(b => b.style.color = "white");
    document.getElementById('btn-'+cat).style.color = "#008c45";

    menuData.filter(i => i.category === cat).forEach(item => {
        grid.innerHTML += `
            <div class="menu-item" style="background:white; padding:15px; margin-bottom:10px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <div>
                    <h3 style="margin:0;">${item.name}</h3>
                    <p style="margin:5px 0; font-size:0.8rem; color:#666;">${item.description}</p>
                    <strong style="color:#d52b1e;">${item.price.toFixed(2)}€</strong>
                </div>
                <button onclick="addToCart(${item.id})" style="background:#008c45; color:white; border:none; padding:10px; border-radius:5px; font-weight:bold;">+ ADD</button>
            </div>`;
    });
}

function addToCart(id) {
    cart.push(menuData.find(i => i.id === id));
    document.getElementById('totalPrice').innerText = cart.reduce((s, i) => s + i.price, 0).toFixed(2);
}

function openSummary() {
    if(cart.length === 0) return alert("Warenkorb leer!");
    document.getElementById('orderModal').style.display = 'block';
    document.getElementById('rTable').innerText = table;
    document.getElementById('rDate').innerText = new Date().toLocaleString('de-DE');
    
    // Sort receipt by category order: Vorspeise -> Hauptspeise -> Nachtisch -> Getränke
    const order = ["Vorspeise", "Hauptspeise", "Nachtisch", "Getränke"];
    let html = "";
    
    order.forEach(cat => {
        const items = cart.filter(i => i.category === cat);
        if(items.length > 0) {
            html += `<div style="font-weight:bold; border-bottom:1px solid #000; margin-top:10px; text-transform:uppercase;">-- ${cat} --</div>`;
            items.forEach(i => {
                html += `<div style="display:flex; justify-content:space-between; font-size:0.9rem;">
                            <span>1x ${i.name}</span>
                            <span>${i.price.toFixed(2)}€</span>
                         </div>`;
            });
        }
    });
    
    document.getElementById('rItems').innerHTML = html;
    document.getElementById('rTotal').innerText = cart.reduce((s, i) => s + i.price, 0).toFixed(2);
}

function closeModal() { document.getElementById('orderModal').style.display = 'none'; }

function shareOrder() {
    const text = `Bestellung Tisch ${table} - Pizzeria Sorrentino:\n${cart.map(i => i.name).join(", ")}\nGesamt: ${document.getElementById('rTotal').innerText}€`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

function downloadReceipt() {
    const content = document.getElementById('receipt').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Sorrentino_Tisch_${table}.txt`;
    a.click();
}
