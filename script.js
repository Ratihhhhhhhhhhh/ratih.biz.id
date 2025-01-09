// Mendaftarkan Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(() => console.log('Service Worker Terdaftar'))
      .catch(err => console.error('Service Worker Gagal:', err));
  });
}

// Data Produk Sepatu
const products = [
  { name: "Sepatu Wanita Elegan", price: 350000, image: "assets/images/shoe1.jpg" },
  { name: "Sepatu Kasual Modern", price: 250000, image: "assets/images/shoe2.jpg" },
  { name: "Sneakers Gaya", price: 400000, image: "assets/images/shoe3.jpg" },
  { name: "Sepatu Kantor", price: 300000, image: "assets/images/shoe4.jpg" },
  { name: "Boots Fashion", price: 500000, image: "assets/images/shoe5.jpg" },
  { name: "Sepatu Flat Wanita", price: 200000, image: "assets/images/shoe6.jpg" },
  { name: "High Heels Mewah", price: 450000, image: "assets/images/shoe7.jpg" },
  { name: "Sepatu Olahraga", price: 320000, image: "assets/images/shoe8.jpg" },
  { name: "Sepatu Vintage", price: 280000, image: "assets/images/shoe9.jpg" },
  { name: "Sandals Wanita", price: 180000, image: "assets/images/shoe10.jpg" },
];

// Render Produk ke Halaman
const productGrid = document.getElementById("product-grid");

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Beli Sekarang</button>
    `;

    productGrid.appendChild(productCard);
  });
}

// Keranjang Belanja
const cart = [];
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    cartList.appendChild(cartItem);

    total += item.price;
  });

  cartTotal.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Tombol Kembali ke Atas
const 
