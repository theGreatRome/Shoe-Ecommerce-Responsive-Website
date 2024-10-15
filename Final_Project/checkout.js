function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = '';
    } else {
        let total = 0;
        const itemsList = cart.map((item, index) => {
            const quantity = item.quantity || 1; // Default quantity to 1 if not set
            const subtotal = item.price * quantity;
            total += subtotal;
            return `
                <div class="cart-item">
                    <p>${item.productName}</p>
                    <p>₱${item.price}</p>
                    <input type="number" value="${quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <p class="subtotal">Subtotal: ₱${subtotal}</p>
                    <button onclick="removeProduct(${index})">Remove</button>
                </div>
            `;
        }).join('');
        cartItemsDiv.innerHTML = itemsList;
        totalPriceDiv.innerHTML = `Total: ₱${total}`;
    }
}

function updateQuantity(index, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeProduct(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function completeCheckout() {
    window.location.href = 'payment.html';
}

window.onload = loadCart;