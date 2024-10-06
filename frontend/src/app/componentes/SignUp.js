"use client"

import { useEffect, useState } from "react";
import { signUp } from "../api/apiEndpoints";
import apiHelper from "../api/apihelper";



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
    <div>
      <h1>{
        data}</h1>
      <div>
        <form style={{
          
          display:'flex',flexDirection:'column',rowGap:'2rem'
        }}>
          <input type='text' placeholder='Name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='Password'/>
        </form>
      </div>
    </div>
  );
}
