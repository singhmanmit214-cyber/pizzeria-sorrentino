const menuData = [
    { id: 1, name: "Margherita", category: "Pizza", price: 8.50, description: "Tomaten, Mozzarella, Basilikum", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=500" },
    { id: 2, name: "Salami", category: "Pizza", price: 10.00, description: "Tomaten, Mozzarella, Rindersalami", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500" },
    { id: 3, name: "Spaghetti Carbonara", category: "Pasta", price: 11.50, description: "Sahnesauce, Schinken, Ei", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500" },
    { id: 4, name: "Tiramisu", category: "Dessert", price: 6.50, description: "Hausgemacht nach Familienrezept", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500" }
];

let cart = [];

function renderMenu(category = 'All') {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'All' ? menuData : menuData.filter(item => item.category === category);
    
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price.toFixed(2)}€</div>
                <button class="add-btn" onclick="addToCart(${item.id})">Hinzufügen</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)}€</span>
        </div>`;
    });
    
    document.getElementById('cartTotal').innerText = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function filterMenu(category, event) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(category);
}

// Initial Load
window.onload = () => renderMenu();
