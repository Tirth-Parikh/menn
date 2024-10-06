"use client"
import '../styles/UserProfile.css';


import { FaEnvelope, FaLock, FaShoppingCart, FaUserEdit } from 'react-icons/fa';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    orders: [
      { id: 1, date: '2024-01-10', total: 59.99, status: 'Delivered' },
      { id: 2, date: '2024-02-15', total: 89.99, status: 'Pending' },
      // Add more orders as needed
    ],
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h1 className="profile-title">Welcome, {user.name}!</h1>
        <p className="profile-email">{user.email}</p>
      </div>

      <div className="profile-actions">
        <button className="action-button">
          <FaUserEdit /> Edit Profile
        </button>
        <button className="action-button">
          <FaLock /> Change Password
        </button>
      </div>

      <div className="orders-section">
        <h2 className="orders-title">Your Orders</h2>
        {user.orders.length === 0 ? (
          <p className="no-orders">You have no orders yet.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="settings-section">
        <h2 className="settings-title">Account Settings</h2>
        <div className="setting-item">
          <FaEnvelope /> <span>Email Notifications</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="setting-item">
          <FaShoppingCart /> <span>Show Cart Notifications</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
