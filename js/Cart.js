// Trio Fashion Cart System

function getCart() {
  return JSON.parse(localStorage.getItem("trioCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("trioCart", JSON.stringify(cart));
  updateCartCount();
}

// Add product to cart
function addToCart(productId) {
  const cart = getCart();

  const id = Number(productId);
  const product = products.find(p => p.id === id);

  if (!product) {
    alert("Product not found!");
    return;
  }

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);

  alert(product.name + " added to cart!");
}

// Update cart number
function updateCartCount() {
  const cart = getCart();

  const count = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

// Change quantity
function changeQuantity(productId, change) {
  const cart = getCart();
  const id = Number(productId);

  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    const index = cart.findIndex(item => item.id === id);
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

// Remove product
function removeFromCart(productId) {
  const cart = getCart();
  const id = Number(productId);

  const newCart = cart.filter(item => item.id !== id);

  saveCart(newCart);
  renderCart();
}

// Display cart
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems || !cartTotal) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerHTML = "Total: ₹0";
    updateCartCount();
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="card cart-item">

        <img 
          src="${item.image}" 
          alt="${item.name}"
          style="width:120px; height:150px; object-fit:cover;"
        >

        <h3>${item.name}</h3>

        <p>Price: ₹${item.price.toLocaleString("en-IN")}</p>

        <div>
          <button onclick="changeQuantity(${item.id}, -1)">−</button>

          <strong style="margin:0 15px;">
            ${item.quantity}
          </strong>

          <button onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>

        <p>
          Item Total:
          ₹${itemTotal.toLocaleString("en-IN")}
        </p>

        <button 
          class="btn"
          onclick="removeFromCart(${item.id})"
        >
          Remove
        </button>

      </div>
    `;
  }).join("");

  cartTotal.innerHTML = `
    <h2>Total: ₹${total.toLocaleString("en-IN")}</h2>
  `;

  updateCartCount();
}

// Update cart count when page loads
updateCartCount();
