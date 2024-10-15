let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateCartCount();
    alert(productName + " has been added to your cart.");
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        window.location.href = 'checkout.html';
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

window.onload = updateCartCount;