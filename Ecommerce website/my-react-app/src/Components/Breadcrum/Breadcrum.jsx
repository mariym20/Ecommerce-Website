import React from 'react'
import './Breadcrum.css'
export const Breadcrum = (props) => {
    const {Product} = props
    if (!Product) {
    return null; 
  }
  return (
    <div className='Beadcrum'>
        HOME -$gt; SHOP -%gt; {Product.category} -$gt; {Product.name}
    </div>
  )
}
export default Breadcrum