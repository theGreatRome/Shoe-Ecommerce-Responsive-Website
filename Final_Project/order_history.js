document.addEventListener('DOMContentLoaded', function() {
    const orderHistory = [
        {
            date: '2024-10-01T10:30:00Z',
            items: [
                { productName: 'Sneakers', quantity: 2, price: 1500 },
                { productName: 'Running Shoes', quantity: 1, price: 2000 }
            ],
            total: 5000
        },
        {
            date: '2024-09-15T15:45:00Z',
            items: [
                { productName: 'Basketball Shoes', quantity: 1, price: 3000 }
            ],
            total: 3000
        }
    ];

    const orderHistoryDiv = document.getElementById('order-history');

    if (orderHistory.length === 0) {
        orderHistoryDiv.innerHTML = '<p>No orders found.</p>';
    } else {
        let historyHTML = orderHistory.map(order => {
            const itemsHTML = order.items.map(item => `
                <li>${item.productName} - ${item.quantity} x ₱${item.price} = ₱${item.price * item.quantity}</li>
            `).join('');
            return `
                <div class="order">
                    <h3>Order Date: ${new Date(order.date).toLocaleString()}</h3>
                    <ul>${itemsHTML}</ul>
                    <p>Total Paid: ₱${order.total}</p>
                </div>
            `;
        }).join('');
        orderHistoryDiv.innerHTML = historyHTML;
    }
});