"use client";

import Image from "next/image";
import ".././styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg"
          alt="Hero Image"
          width={1600}
          height={900}
          layout="responsive"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to eShop</h1>
          <p className="hero-subtitle">Your one-stop shop for premium products.</p>
          <button className="hero-button">Shop Now</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <Image
              src="https://themewagon.github.io/cozastore/images/product-06.jpg"
              alt="Product 1"
              width={300}
              height={300}
              className="product-image"
            />
            <h3>Product 1</h3>
            <p className="product-price">$19.99</p>
            <button className="product-button">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image
              src="https://photoscissors.com/images/samples/2-before.jpg"
              alt="Product 2"
              width={300}
              height={300}
              className="product-image"
            />
            <h3>Product 2</h3>
            <p className="product-price">$29.99</p>
            <button className="product-button">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image
              src="https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?b=1&s=612x612&w=0&k=20&c=CCsyRfpRLRnXWpyAIqgQrI_r0fZ4XaGxM2ivIgOh4Mc="
              alt="Product 3"
              width={300}
              height={300}
              className="product-image"
            />
            <h3>Product 3</h3>
            <p className="product-price">$39.99</p>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-item">
          <p>"Great products! Highly recommend!"</p>
          <span>- Customer A</span>
        </div>
        <div className="testimonial-item">
          <p>"Exceptional quality and service!"</p>
          <span>- Customer B</span>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 eShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


