import React from 'react'
import "./login.css"

export default function Login() {

  const loginWithgoogle=()=>{
    window.open("http://localhost:5000/auth/google/callback","_self")
  }




  return (
 <>
 <div className='login-page'>
  <h1 style={{ textAlign:"center" }}>Login</h1>
  <div className='form'>
    <form className='login-form'>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>

      <button>login</button>
   
      <p className='message'>Not registered? <a href="#">Create an account</a></p>

    </form>
    <button className='login-with-google-btn' onClick={loginWithgoogle}>
      sign In with Google
    </button>

  </div>

 </div>
 
 </>
  )
}
