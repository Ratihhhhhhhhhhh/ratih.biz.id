/* Reset dan Font Dasar */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

/* Header dan Navigasi */
header {
  background-color: #f8b5c5;
  color: white;
  padding: 20px 10px;
  text-align: center;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* Grid Produk */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 15px;
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product h3 {
  font-size: 18px;
  margin: 10px 0;
}

.product p {
  font-size: 16px;
  color: #555;
  margin: 5px 0;
}

/* Tombol Aksi */
button {
  background-color: #f06292;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #e91e63;
  transform: scale(1.05);
  transition: all 0.3s ease;
}

/* Footer */
footer {
  background-color: #f8b5c5;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

footer p {
  margin: 5px 0;
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Tombol Kembali ke Atas */
#scrollTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: none;
}

#scrollTop:hover {
  background-color: #f06292;
}

/* Responsif */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
