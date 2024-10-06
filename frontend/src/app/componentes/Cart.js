"use client"
import '../styles/Cart.css';
const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150', // Placeholder image
    },
    // Add more products as needed
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button className="quantity-button">-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-button">+</button>
                </div>
              </div>
              <button className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h2 className="summary-title">Cart Summary</h2>
        <p className="summary-text">Total: ${totalAmount.toFixed(2)}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
