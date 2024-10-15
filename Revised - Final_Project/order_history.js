document.addEventListener('DOMContentLoaded', function() {
    const orderHistory = [
        {
            date: '2024-10-01T10:30:00Z',
            items: [
                { productName: 'Nike Cortez', quantity: 1, price: 4900 },
                { productName: 'Air Force 1', quantity: 1, price: 5495 }
            ],
            total: 10395,
            orderId: '123456',
            trackingNumber: 'FEDEX123456',
            shippingAddress: '428 Main St, Angeles City, Philippines'
        },
        {
            date: '2024-09-15T15:45:00Z',
            items: [
                { productName: 'Nike Dunk Low', quantity: 1, price: 5350 }
            ],
            total: 5350,
            orderId: '654321',
            trackingNumber: 'FEDEX654321',
            shippingAddress: '428 Main St, Angeles City, Philippines'
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
                    <p>Shipping Address: ${order.shippingAddress}</p>
                    <p>Tracking Number: <a href="https://www.fedex.com/apps/fedextrack/?tracknumbers=${order.trackingNumber}" target="_blank">${order.trackingNumber}</a></p>
                    <p>Total Paid: ₱${order.total}</p>
                    <button class="cancel-order" data-order-id="${order.orderId}">Cancel Order</button>
                </div>
            `;
        }).join('');
        orderHistoryDiv.innerHTML = historyHTML;
    }

    orderHistoryDiv.addEventListener('click', function(event) {
        if (event.target.classList.contains('cancel-order')) {
            const orderId = event.target.getAttribute('data-order-id');
            const orderIndex = orderHistory.findIndex(order => order.orderId === orderId);
            if (orderIndex !== -1) {
                orderHistory.splice(orderIndex, 1);
                alert(`Order ${orderId} has been successfully cancelled.`);
                
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
                                <p>Shipping Address: ${order.shippingAddress}</p>
                                <p>Tracking Number: <a href="https://www.fedex.com/apps/fedextrack/?tracknumbers=${order.trackingNumber}" target="_blank">${order.trackingNumber}</a></p>
                                <p>Total Paid: ₱${order.total}</p>
                                <button class="cancel-order" data-order-id="${order.orderId}">Cancel Order</button>
                            </div>
                        `;
                    }).join('');
                    orderHistoryDiv.innerHTML = historyHTML;
                }
            } else {
                alert(`Order ${orderId} not found.`);
            }
        }
    });
});