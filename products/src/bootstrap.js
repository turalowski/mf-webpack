import { faker } from '@faker-js/faker';

const mount = el => {
  let products = '';

  for (let i = 1; i < 6; i++) {
    const productName = faker.commerce.productName();
    products += `<div>${productName}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

export { mount };
