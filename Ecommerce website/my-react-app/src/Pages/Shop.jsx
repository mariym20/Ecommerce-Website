import React from 'react'

import Hero from '../Components/Hero/Hero'
import Newcollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'


import  Offers  from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
    <Newcollections/>
    <Newsletter/>
   
    </div>
  )
}

export default shop
