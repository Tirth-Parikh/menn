"use client"
import Link from 'next/link';
import '../styles/login.css';

export const LogIn = () => {

  return (
    <div className="login-container">
  <div className="login-box">
    <h1 className="login-title">Welcome Back!</h1>
    <p className="login-subtitle">Log in to your account</p>
    
    <form className="login-form">
      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="login-button">Log In</button>
    </form>

    <p className="login-footer-text">
      Not have an account? 
      <Link href="/" className="login-footer-link">Sign up</Link>
    </p>
  </div>
</div>
  );
}
