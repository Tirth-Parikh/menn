"use client"

import { useEffect, useState } from "react";
import { signUp } from "../api/apiEndpoints";
import apiHelper from "../api/apihelper";
import '../styles/signup.css';


export const SignUp = () => {
const [data,setData]=useState('')
  const getData=async()=>{
    try {
      const data=await apiHelper(signUp)
      console.log(data,'vvv');
      setData(data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

 useEffect(()=>{
  getData()
 },[])
   
  return (
    <div className="signup-container">
    <div className="signup-form">
      <h1 className="title">Sign Up</h1>
      <div className="form-wrapper">
        <form>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="signup-button">Sign up</button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/LogIn" className="login-link">Log In</a>
        </p>
      </div>
    </div>
  </div>
  
  );
}
