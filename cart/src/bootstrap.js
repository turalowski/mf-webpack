const { faker } = require('@faker-js/faker');

const mount = el => {
  // Generate a random number between 0 and 100 using faker
  const productCount = faker.datatype.number({ min: 0, max: 100 });

  // Create the cart text
  const cartText = `<div>You have ${productCount} products</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
