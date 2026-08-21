let cart = JSON.parse(localStorage.getItem("trioCart")) || [];

function saveCart() {
  localStorage.setItem("trioCart", JSON.stringify(cart));
}

function addToCart(productId) {

  const product = products.find(p => p.id === productId);

  if (!product) return;

  const existingProduct = cart.find(
    item => item.id === productId
  );

  if (existingProduct) {

    existingProduct.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });

  }

  saveCart();
  updateCartCount();

  alert(product.name + " cart mein add ho gaya!");

}

function removeFromCart(productId) {

  cart = cart.filter(
    item => item.id !== productId
  );

  saveCart();
  displayCart();
  updateCartCount();

}

function increaseQuantity(productId) {

  const item = cart.find(
    product => product.id === productId
  );

  if (item) {
    item.quantity++;
  }

  saveCart();
  displayCart();
  updateCartCount();

}

function decreaseQuantity(productId) {

  const item = cart.find(
    product => product.id === productId
  );

  if (!item) return;

  if (item.quantity > 1) {

    item.quantity--;

  } else {

    removeFromCart(productId);
    return;

  }

  saveCart();
  displayCart();
  updateCartCount();

}

function updateCartCount() {

  const cartCount = document.getElementById("cartCount");

  if (!cartCount) return;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCount.textContent = totalItems;

}

function displayCart() {

  const cartContainer =
    document.getElementById("cartItems");

  const cartTotal =
    document.getElementById("cartTotal");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {

    cartContainer.innerHTML =
      "<h3>Your cart is empty.</h3>";

    if (cartTotal) {
      cartTotal.textContent = "₹0";
    }

    return;

  }

  let total = 0;

  cart.forEach(item => {

    const itemTotal =
      item.price * item.quantity;

    total += itemTotal;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
        width="100"
      >

      <div>

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <button onclick="decreaseQuantity(${item.id})">
          −
        </button>

        <span style="margin:0 10px;">
          ${item.quantity}
        </span>

        <button onclick="increaseQuantity(${item.id})">
          +
        </button>

        <p>
          Subtotal: ₹${itemTotal}
        </p>

        <button onclick="removeFromCart(${item.id})">
          Remove
        </button>

      </div>

    `;

    cartContainer.appendChild(div);

  });

  if (cartTotal) {
    cartTotal.textContent = "₹" + total;
  }

}

updateCartCount();
displayCart();
