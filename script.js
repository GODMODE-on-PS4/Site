const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - £${item.price.toFixed(2)} `;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      renderCart();
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Thank you for your purchase! Total: £${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}`);
    cart.length = 0;
    renderCart();
  }
}
