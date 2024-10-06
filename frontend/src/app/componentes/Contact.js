"use client"
import '../styles/Comntact.css';

const Contact = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="info-title">Get in Touch</h2>
          <p className="info-text">
            For any inquiries, please fill out the form below or reach us at:
          </p>
          <ul className="contact-details">
            <li>Email: support@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 E-commerce St, Shop City, ABC 12345</li>
          </ul>
        </div>

        <form className="contact-form">
          <h2 className="form-title">Contact Form</h2>
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
