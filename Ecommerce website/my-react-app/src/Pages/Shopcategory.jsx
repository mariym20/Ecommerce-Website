
import { useContext } from 'react'
import React from 'react'
import { ShopContext } from '../Contex/Shopcontext'

import './CSS/Shopcategory.css'
// import dropdown from '../Components/Assests/drop-down.jpg'
import Items from '../Components/items/items'
const Shopcategory = (props) => {
 const {all_products} = useContext(ShopContext)
  return (
    <div  className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="Shopcategory-indexSort">
      <p>
        <span>Showing 1 to 8</span>out of 32 products
      </p>
      </div>
      <div className="shopcategory-sort">
   {/* Sort by <img src={dropdown} alt="" srcset="" /> */}
      </div>
      <div className="Shopcategory-products">
        {all_products.map((items ,i)=>
        {
           if(props.Shopcategory === items.Shopcategory)
           {
            return <Items key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price} />;
           }
           else
           {
            return(null)
           }
        })}
      </div>
      <div className='Load-more'>
        <button className='btn btn-primary'>Load more</button>
      </div>
    </div>
   
  )
}

export default Shopcategory
