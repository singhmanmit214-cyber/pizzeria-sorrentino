const menuData = [
    // ANTIPASTI
    { id: 1, name: "Bruschetta", category: "antipasti", price: 8.50, desc: "Geröstetes Brot mit Tomaten, Zwiebeln, Knoblauch, Basilikum und Olivenöl", image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500" },
    { id: 2, name: "Focaccia", category: "antipasti", price: 6.50, desc: "Brot mit Rosmarin und Knoblauchöl (Vegan)", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500" },
    { id: 3, name: "Caprese", category: "antipasti", price: 12.50, desc: "Tomatenscheiben mit Büffelmozzarella und Basilikum", image: "https://images.unsplash.com/photo-1592483648228-b35146a4330c?w=500" },
    
    // PIZZA
    { id: 4, name: "Pizza Prosciutto e Funghi", category: "pizza", price: 13.50, desc: "Mit Schinken und frischen Champignons", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 5, name: "Pizza Tonno", category: "pizza", price: 13.50, desc: "Mit Thunfisch und Zwiebeln", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" },
    { id: 6, name: "Pizza Capri", category: "pizza", price: 14.00, desc: "Mit Mozzarella, Tomaten und frischem Basilikum", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=500" },
    { id: 7, name: "Pizza Verdura", category: "pizza", price: 14.50, desc: "Mit verschiedenen Gemüsesorten", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500" },
    { id: 8, name: "Pizza Rustica", category: "pizza", price: 14.50, desc: "Pikante Pizza mit scharfer Salami", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500" },

    // SALATE
    { id: 9, name: "Insalata Mista", category: "all", price: 9.00, desc: "Grüner Salat, Tomaten, Gurken und Zwiebeln", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500" },
    { id: 10, name: "Insalata Capricciosa", category: "all", price: 14.50, desc: "Gemischter Salat mit Thunfisch, Ei, Schinken und Oliven", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500" }
];

let cart = [];

function initMenu() {
    const menuGrid = document.getElementById('menuItems');
    if(!menuGrid) return;
    menuGrid.innerHTML = menuData.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">€${item.price.toFixed(2)}</div>
            <button class="add-btn" onclick="addToCart(${item.id})">In den Warenkorb</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = menuData.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if(cartCount) cartCount.innerText = cart.length;
    
    if(cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                <span>${item.name}</span>
                <span>€${item.price.toFixed(2)}</span>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if(cartTotal) cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if(modal) modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function placeOrder() {
    const orderId = Math.floor(Math.random() * 90000) + 10000;
    const idSpan = document.getElementById('orderId');
    if(idSpan) idSpan.innerText = orderId;
    const modal = document.getElementById('orderConfirmModal');
    if(modal) modal.style.display = 'flex';
}

function newOrder() {
    cart = [];
    updateCartUI();
    const modal = document.getElementById('orderConfirmModal');
    if(modal) modal.style.display = 'none';
    toggleCart();
}

// Category Filtering logic
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        const cat = tab.getAttribute('data-category');
        document.querySelectorAll('.menu-item').forEach(item => {
            if (cat === 'all' || item.dataset.category === cat) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

window.onload = initMenu;
