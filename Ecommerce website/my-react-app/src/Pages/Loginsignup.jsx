import React from 'react'
import './Loginsingup.css'
const Loginsignup = () => {
  return (
    <div  className='loginsignup'>
      <div className='signup-container'>
        <h1>Sign up</h1>
        <div className='signup-form'>
  
        
        <input type="text"  placeholder='Enter Your name' />
       
        <input type="Email" placeholder='Enter your email' />
     
        <input type="password" placeholder = "enter your passwords"/>
      
   
      
        </div>
        <button >Continue</button>
       <p>Already have an account?<span>Login here</span> </p>
      
        <div className='loginsignup-agree'>
          <label> <input type="checkbox" name="" id='' /><span>By continuing, i agree to the terms and use of privacy policy</span></label>
       
        </div>
       
       
      </div>
    </div>
  )
}

export default Loginsignup
