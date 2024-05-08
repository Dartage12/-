
document.querySelectorAll('.products li button').forEach(button => {
    button.addEventListener('click', () => {
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

document.querySelector('.cart button').addEventListener('click', () => {
    alert('Процесс оформления заказа еще не реализован!');
});
