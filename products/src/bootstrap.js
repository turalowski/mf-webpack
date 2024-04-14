const { faker } = require('@faker-js/faker');

let products = '';

for (let i = 1; i < 6; i++) {
  const productName = faker.commerce.productName();
  products += `<div>${productName}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
