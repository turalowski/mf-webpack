let products = '';

for (let i = 1; i < 6; i++) {
  products += `<div>product ${i}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
