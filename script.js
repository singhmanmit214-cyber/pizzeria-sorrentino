const menuData = [
    { id: 1, name: "Margherita", category: "pizza", price: 8.50, description: "Tomaten, Mozzarella, Basilikum", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=500" },
    { id: 2, name: "Salami", category: "pizza", price: 10.00, description: "Tomaten, Mozzarella, Rindersalami", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500" },
    { id: 3, name: "Bruschetta", category: "Antipasti", price: 6.50, description: "Geröstetes Brot mit Tomaten", image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=500" }
];

let cart = [];

function renderMenu(category = 'All') {
    const grid = document.getElementById('menuGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    const filtered = category === 'All' ? menuData : menuData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="menu-item" style="padding: 15px; border-bottom: 1px solid #eee; margin-bottom: 10px;">
                <img src="${item.image}" alt="${item.name}" style="width:100%; border-radius:10px;">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price"><strong>${item.price.toFixed(2)}€</strong></div>
                <button onclick="addToCart(${item.id})" style="background:#d52b1e; color:white; border:none; padding:10px; border-radius:5px; margin-top:10px; width:100%;">Hinzufügen</button>
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
    const type = document.getElementById('orderType').value;
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('customerAddress').value;
    
    if (cart.length === 0) {
        alert("Ihr Warenkorb ist leer!");
        return;
    }
    if (!name) {
        alert("Bitte geben Sie Ihren Namen ein!");
        return;
    }

    let message = `🍕 *NEUE BESTELLUNG - SORRENTINO* 🍕%0A%0A`;
    message += `*Name:* ${name}%0A`;
    message += `*Art:* ${type}%0A`;
    if(type === "Lieferung") message += `*Adresse:* ${address}%0A`;
    
    message += `%0A*Bestellung:*%0A`;
    let total = 0;
    cart.forEach((item) => {
        message += `- ${item.name} (${item.price.toFixed(2)}€)%0A`;
        total += item.price;
    });

    message += `%0A💰 *Gesamt: ${total.toFixed(2)}€*`;

    // CHANGE THIS TO YOUR REAL NUMBER
    const myNumber = "49123456789"; 
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}

window.onload = () => renderMenu('All');

