"use client"

import '../styles/AboutUs.css';


const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Your one-stop destination for all your shopping needs!</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p className="section-text">
            Founded in 2020, we started our journey with a simple mission: to provide high-quality products at affordable prices. Our passion for excellence drives us to continually improve our offerings and customer experience. 
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We aim to bring the best shopping experience to our customers by curating products that are not only trendy but also practical. We believe in sustainability and strive to minimize our impact on the environment by sourcing responsibly.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li className="value-item">🌍 **Sustainability**: We prioritize eco-friendly products and practices.</li>
            <li className="value-item">🤝 **Integrity**: We are committed to honesty and transparency.</li>
            <li className="value-item">🌟 **Customer-Centric**: Your satisfaction is our top priority.</li>
            <li className="value-item">💡 **Innovation**: We embrace creativity and new ideas.</li>
          </ul>
        </div>
      </div>

      <div className="about-footer">
        <h2 className="footer-title">Join Us on Our Journey</h2>
        <p className="footer-text">
          Follow us on social media and be a part of our community! 
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default About;
