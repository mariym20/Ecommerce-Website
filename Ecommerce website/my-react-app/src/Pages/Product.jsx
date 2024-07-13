import React  from 'react'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ShopContext } from '../Contex/Shopcontext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
 const {all_products} = useContext(ShopContext);
 const {productId} = useParams();
 const Product = all_products.find((e) =>e.id === Number(productId))
  return (
    <div>
      <Breadcrum Product = {Product}/>
      <ProductDisplay Product = {Product}/>
    </div>
  )
}

export default Product
