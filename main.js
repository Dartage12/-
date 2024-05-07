// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.products li button').forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart
        const product = button.parentNode;
        const cart = document.querySelector('.cart ul');
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${product.querySelector('img').src}" alt="${product.querySelector('h3').textContent}">
            <h3>${product.querySelector('h3').textContent}</h3>
            <p>${product.querySelector('p').textContent}</p>
        `;
        cart.appendChild(cartItem);
    });
});

// Add event listener to "Checkout" button
document.querySelector('.cart button').addEventListener('click', () => {
    // Handle checkout process
    alert('Checkout process not implemented yet!');
});