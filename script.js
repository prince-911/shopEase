// JavaScript to handle 'Add to Cart' functionality

const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product-card');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        
        // Add the selected product to the cart array
        cart.push({ name: productName, price: productPrice });
        
        // Show updated cart (for demo purposes)
        alert(`${productName} has been added to your cart!`);
        console.log(cart);
    });
});
