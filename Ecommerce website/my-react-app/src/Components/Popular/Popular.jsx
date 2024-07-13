import React from 'react'
import './Popular.css'
import data_products from '../Assests/data'
import Items from '../items/items'

const Popular = () => {
  return (
    <div className = "Popular">
      <p>Collections for women</p>
      <hr/>
     <div className='popular-items'>
      
   
  {data_products.map((items , i)=>
  {
    return<Items key = {i} id = {items.id} name = {items.name} image = {items.image} old_price = {items.old_price} new_price = {items.new_price}  />
  })}






     </div>
    
    </div>
  )
}

export default Popular
