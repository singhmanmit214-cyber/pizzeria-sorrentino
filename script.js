const menuData = [
    // GETRÄNKE
    { id: 101, name: "Cola 0.33l", category: "Getränke", price: 3.50, description: "Eiskalt serviert", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500" },
    { id: 102, name: "Wasser 0.5l", category: "Getränke", price: 2.50, description: "Still oder Sprudel", image: "https://images.unsplash.com/photo-1548919973-5dea5846f669?auto=format&fit=crop&w=500" },
    
    // PIZZA
    { id: 1, name: "Margherita", category: "Pizza", price: 8.50, description: "Tomaten, Mozzarella, Basilikum", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=500" },
    { id: 2, name: "Salami", category: "Pizza", price: 10.00, description: "Tomaten, Mozzarella, Rindersalami", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500" },
    
    // PASTA
    { id: 201, name: "Spaghetti Carbonara", category: "Pasta", price: 11.50, description: "Ei, Speck, Pecorino", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500" }
];

let cart = [];
let selectedTable = "";

function startOrdering() {
    const table = document.getElementById('tableNumber').value;
    if (!table) {
        alert("Bitte wählen Sie zuerst einen Tisch!");
        return;
    }
    selectedTable = table;
    document.getElementById('displayTable').innerText = table;
    document.getElementById('tableSelection').style.display = 'none';
    document.getElementById('menuContent').style.display = 'block';
    renderMenu('Getränke'); // Start with drinks
}

function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    
    const filtered = menuData.filter(item => item.category === category);
    
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="menu-item" style="padding: 15px; border-bottom: 1px solid #eee; margin-bottom: 15px;">
                <img src="${item.image}" style="width:100px; height:100px; float:left; border-radius:10px; margin-right:15px; object-fit:cover;">
                <h3 style="margin:0;">${item.name}</h3>
                <p style="font-size:0.8rem; color: #666;">${item.description}</p>
                <div style="font-weight:bold;">${item.price.toFixed(2)}€</div>
                <button onclick="addToCart(${item.id})" style="background:#d52b1e; color:white; border:none; padding:5px 15px; border-radius:5px; margin-top:5px;">+ Hinzufügen</button>
                <div style="clear:both;"></div>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    document.getElementById('cartCount').innerText = cart.length;
}

function sendOrder() {
    if (cart.length === 0) { alert("Warenkorb leer!"); return; }

    let message = `🪑 *TISCH ${selectedTable} - BESTELLUNG* 🪑%0A%0A`;
    let total = 0;
    cart.forEach((item) => {
        message += `- ${item.name} (${item.price.toFixed(2)}€)%0A`;
        total += item.price;
    });

    message += `%0A💰 *Gesamt: ${total.toFixed(2)}€*`;

    const myNumber = "49123456789"; // Replace with your number!
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}
