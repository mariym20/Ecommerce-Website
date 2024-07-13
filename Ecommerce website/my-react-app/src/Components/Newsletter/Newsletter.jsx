import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='Newletter'>
     <h1>Get Exclusive offer from mail</h1>
     <p>Subscribe our Newsletter and sta updated</p>

     <div>
      <input type="email"  placeholder='enter your email'/>
      <button>Submit</button>
     </div>
   </div>
  )
}
export default Newsletter