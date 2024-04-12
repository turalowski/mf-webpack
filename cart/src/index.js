const productCount = Math.floor(Math.random() * 100);
const cartText = `<div>You have ${productCount} products</div>`;
document.querySelector('#dev-cart').innerHTML = cartText;
