import React from 'react'
import './Offers.css'
import image5 from '../Assests/dress5.webp'
export const Offers = () => {
  return (
    <div className='Offers'>
        <div className="Offers-left">
      <h1>Exclusive offers</h1>
      <h1>Offers for you</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check now</button>
        </div>
        <div className="Offers-right">
  <img src={image5} alt="" srcset="" />
        </div>
    </div>
  )
}
export default Offers