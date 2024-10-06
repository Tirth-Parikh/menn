"use client"
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import '../styles/Products.css';

const Products = () => {
  // Sample product data (you can replace it with dynamic data from your backend)
  const products = [
    { id: 1, name: 'Product One', price: 99.99, img: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product Two', price: 149.99, img: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product Three', price: 199.99, img: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product Four', price: 249.99, img: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Product Five', price: 79.99, img: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Product Six', price: 129.99, img: 'https://via.placeholder.com/300' }
  ];

  return (
    <div className="products-page">
      <h1 className="products-title">Explore Our Products</h1>

      {/* Filters Section */}
      <div className="filters-section">
        <button className="filter-btn">Sort by Price</button>
        <button className="filter-btn">Best Sellers</button>
        <button className="filter-btn">New Arrivals</button>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>

            {/* Quick Actions */}
            <div className="product-actions">
              <button className="add-to-cart-btn">
                <FaCartPlus /> Add to Cart
              </button>
              <button className="wishlist-btn">
                <FaHeart /> Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
