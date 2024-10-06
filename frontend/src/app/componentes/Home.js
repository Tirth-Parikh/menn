"use client"
import '../styles/Home.css';

import { FaCartPlus, FaPercent, FaShippingFast, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover the Latest Trends</h1>
          <p>Explore our wide collection of fashion, electronics, and more.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <img src="https://via.placeholder.com/900x500" alt="Hero Banner" className="hero-image" />
      </div>

      {/* Featured Categories */}
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://via.placeholder.com/300" alt="Category 1" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/300" alt="Category 2" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/300" alt="Category 3" />
            <h3>Home & Kitchen</h3>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/300" alt="Category 4" />
            <h3>Beauty & Health</h3>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="offers-section">
        <h2>Exclusive Offers</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <FaShippingFast className="offer-icon" />
            <h3>Free Shipping</h3>
            <p>On all orders above $50</p>
          </div>
          <div className="offer-card">
            <FaPercent className="offer-icon" />
            <h3>Seasonal Discounts</h3>
            <p>Up to 50% off select items</p>
          </div>
          <div className="offer-card">
            <FaStar className="offer-icon" />
            <h3>Top Rated Products</h3>
            <p>Shop our best-sellers</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product 1" />
            <h3>Product Name</h3>
            <p>$99.99</p>
            <button className="add-to-cart-btn">
              <FaCartPlus /> Add to Cart
            </button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product 2" />
            <h3>Product Name</h3>
            <p>$149.99</p>
            <button className="add-to-cart-btn">
              <FaCartPlus /> Add to Cart
            </button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product 3" />
            <h3>Product Name</h3>
            <p>$199.99</p>
            <button className="add-to-cart-btn">
              <FaCartPlus /> Add to Cart
            </button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="Product 4" />
            <h3>Product Name</h3>
            <p>$249.99</p>
            <button className="add-to-cart-btn">
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
