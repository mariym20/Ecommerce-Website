import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import shoppingLogo from '../Assests/shoppingLogo.png'
import logo from '../Assests/clipart-children.png'
const Navbar = () => {

    const[menu , setmenu] = useState("shop")



  return (
    <div className='Navbar'>
    <div className='logo'>
    <img src={shoppingLogo} alt="Logo" srcset="" />
   
    </div>
     <div>
        <ul className='nav-menu'>
          <li onClick={()=>{setmenu("shop")}}><Link to = '/'>Shop</Link> {menu==="shop"?<h/>:<></>}</li>
          <li onClick={()=>{setmenu("Men")}}><Link to  = '/men'>Men</Link>{menu==="men"?<h/>:<></>}</li>
          <li onClick={()=>{setmenu("Women")}}><Link to = '/Women'>Women</Link>{menu==="Women"?<h/>:<></>}</li>
          <li onClick={()=>{setmenu("Kids")}}><Link to = '/Kids'>Kids</Link>{menu==="Kids"?<h/>:<></>}</li>
        </ul>
     </div>
     <div className='btnn'>
     <Link to = '/login'><button className='btn-btn-primary'>Login</button></Link>
     
    
    
     </div>
     <div className='nav-login-cart'>
      
     <Link to = '/cart' style={{display: 'flex',marginRight: '8em', height: '3em', width: '3em',}}><img src={logo} alt=""/></Link> 
   
     </div>
     <div className="nav-cart-count">0</div>
    </div>
  )
}

export default Navbar
