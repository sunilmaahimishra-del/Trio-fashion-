
const products = [

  // KURTI - ₹199
  {
    id: 1,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti1.jpg"
  },
  {
    id: 2,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti2.jpg"
  },
  {
    id: 3,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti3.jpg"
  },
  {
    id: 4,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti4.jpg"
  },
  {
    id: 5,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti5.jpg"
  },
  {
    id: 6,
    name: "Printed Kurti",
    price: 199,
    image: "images/kurti6.jpg"
  },

  // FORMAL PANT - ₹399
  {
    id: 7,
    name: "Formal Pant",
    price: 399,
    image: "images/formal-pant1.jpg"
  },
  {
    id: 8,
    name: "Formal Pant",
    price: 399,
    image: "images/formal-pant2.jpg"
  },
  {
    id: 9,
    name: "Formal Pant",
    price: 399,
    image: "images/formal-pant3.jpg"
  },
  {
    id: 10,
    name: "Formal Pant",
    price: 399,
    image: "images/formal-pant4.jpg"
  },

  // JEANS - ₹499
  {
    id: 11,
    name: "Stylish Jeans",
    price: 499,
    image: "images/jeans1.jpg"
  },
  {
    id: 12,
    name: "Stylish Jeans",
    price: 499,
    image: "images/jeans2.jpg"
  },

  // PLAIN SHIRT - ₹249
  {
    id: 13,
    name: "Plain Shirt",
    price: 249,
    image: "images/plain-shirt1.jpg"
  },
  {
    id: 14,
    name: "Plain Shirt",
    price: 249,
    image: "images/plain-shirt2.jpg"
  },
  {
    id: 15,
    name: "Plain Shirt",
    price: 249,
    image: "images/plain-shirt3.jpg"
  },
  {
    id: 16,
    name: "Plain Shirt",
    price: 249,
    image: "images/plain-shirt4.jpg"
  },
  {
    id: 17,
    name: "Plain Shirt",
    price: 249,
    image: "images/plain-shirt5.jpg"
  },

  // STRIP SHIRT - ₹299
  {
    id: 18,
    name: "Strip Shirt",
    price: 299,
    image: "images/strip-shirt1.jpg"
  },
  {
    id: 19,
    name: "Strip Shirt",
    price: 299,
    image: "images/strip-shirt2.jpg"
  },

  // TWO PIECE - ₹349
  {
    id: 20,
    name: "Two Piece Set",
    price: 349,
    image: "images/two-piece1.jpg"
  },
  {
    id: 21,
    name: "Two Piece Set",
    price: 349,
    image: "images/two-piece2.jpg"
  },

  // SINGLE KURTI - ₹329
  {
    id: 22,
    name: "Single Kurti",
    price: 329,
    image: "images/single-kurti.jpg"
  }

];

const productGrid = document.getElementById("productGrid");

function displayProducts() {

  productGrid.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.src='images/no-image.jpg'"
      >

      <div class="product-info">

        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-price">
          ₹${product.price}
        </div>

        <button
          class="add-cart-btn"
          onclick="addToCart(${product.id})">
          🛒 Add to Cart
        </button>

      </div>
    `;

    productGrid.appendChild(card);

  });

}

displayProducts();
