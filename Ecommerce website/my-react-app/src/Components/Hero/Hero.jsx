import React from 'react'
import './Hero.css'
import hand from '../Assests/hand.jpeg'
import banner from '../Assests/banner2.png'
const Hero = () => {
  return (
    <div className='Hero'>
    <div className="Hero-left">
     <h3>New Arrivals Only</h3>
    <div className='image'>
    <span><h1>New</h1></span><img src={hand} alt=""/>
     </div> 
     <h1 style={{fontSize : "3em"}}> Collections for everyone</h1>
  <div>
    <button className='btn btn-primary'>Latest Collections </button>
  </div>
    </div>
    <div className="Hero-right">
    <img src={banner} alt="" srcset="" />
    </div>
      
    </div>
  )
}

export default Hero

