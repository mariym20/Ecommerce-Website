import React from 'react'
import './Footer.css'
import logo from '../Assests/logo3.jpg'
import instagram from '../Assests/instagram.webp'
import pintrest from '../Assests/pintrest.png'
import whatsapp from '../Assests/whatsapp.png'
 const Footer = () => {
  return (
    <div  className='footer'>
        <div className="footer-logo">
        <img src={logo} alt="" srcset="" />
        <h1>SHOPPER</h1>
     
        </div>
       
    
     
        <ul  className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
 <div className="footer-soial-icons">
    <div className="footer-icons-container">
      <img src={instagram} alt="" />
    </div>
    <div className="footer-icons-container">
   <img src={pintrest} alt="" srcset="" />
    </div>
    <div className="footer-icons-container">
    <img src={whatsapp} alt="" />
    </div>
 </div>
 <div className='footer-copyright'>
 <hr/>
 <p>Copyright @ 2023- All Right Reserved</p>
 </div>
       </div>
  )
}
export default Footer