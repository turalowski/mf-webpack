const { faker } = require('@faker-js/faker');

// Generate a random number between 0 and 100 using faker
const productCount = faker.datatype.number({ min: 0, max: 100 });

// Create the cart text
const cartText = `<div>You have ${productCount} products</div>`;

// Set the cart text to the element with id 'dev-cart'
document.querySelector('#dev-cart').innerHTML = cartText;
