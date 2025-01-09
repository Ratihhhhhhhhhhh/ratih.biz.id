// Menyimpan produk dan keranjang belanja
let cart = [];
const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

// Produk yang ada di katalog
const products = [
  { id: 1, name: 'Sepatu Wanita 1', price: 300000, image: 'assets/images/shoe1.jpg' },
  { id: 2, name: 'Sepatu Wanita 2', price: 350000, image: 'assets/images/shoe2.jpg' },
  { id: 3, name: 'Sepatu Wanita 3', price: 450000, image: 'assets/images/shoe3.jpg' },
  { id: 4, name: 'Sepatu Wanita 4', price: 500000, image: 'assets/images/shoe4.jpg' },
  { id: 5, name: 'Sepatu Wanita 5', price: 400000, image: 'assets/images/shoe5.jpg' },
  { id: 6, name: 'Sepatu Wanita 6', price: 370000, image: 'assets/images/shoe6.jpg' },
  { id: 7, name: 'Sepatu Wanita 7', price: 330000, image: 'assets/images/shoe7.jpg' },
  { id: 8, name: 'Sepatu Wanita 8', price: 380000, image: 'assets/images/shoe8.jpg' },
  { id: 9, name: 'Sepatu Wanita 9', price: 420000, image: 'assets/images/shoe9.jpg' },
  { id: 10, name: 'Sepatu Wanita 10', price: 470000, image: 'assets/images/shoe10.jpg' },
];

// Menampilkan produk di halaman
function displayProducts() {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Beli Sekarang</button>
    `;
    productGrid.appendChild(productDiv);
  });
}

// Menambahkan produk ke keranjang belanja
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Memperbarui tampilan keranjang belanja
function updateCart() {
  // Membersihkan tampilan keranjang
  cartList.innerHTML = '';
  
  let total = 0;

  cart.forEach((product, index) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${product.name} - Rp ${product.price.toLocaleString()}`;
    cartList.appendChild(cartItem);
    total += product.price;
  });

  // Menampilkan total harga
  cartTotal.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Memanggil fungsi untuk menampilkan produk
displayProducts();
