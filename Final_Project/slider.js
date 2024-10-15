// slider.js
function completeCheckout() {
    document.getElementById('payment-slider').style.width = '300px';
}

function closeSlider() {
    document.getElementById('payment-slider').style.width = '0';
}

function submitPayment(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Simulate payment processing
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'block';
        // Clear the cart and reset the cart count
        clearCart();
        // Redirect to homepage after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 1000); // Simulate a delay for payment processing
}

function clearCart() {
    // Clear cart items from the UI
    document.getElementById('cart-items').innerHTML = '';
    // Reset total price
    document.getElementById('total-price').innerHTML = 'Total: $0.00';
    // Reset cart count
    document.getElementById('cart-count').innerText = '0';
    // Optionally, clear cart data from local storage or any other storage mechanism
    localStorage.removeItem('cart');
}