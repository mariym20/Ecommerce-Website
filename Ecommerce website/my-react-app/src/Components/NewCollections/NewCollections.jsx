import React from 'react';
import new_Colections from '../Assests/Collection';
import './Newcollections.css'; 
import Items from '../items/items';

const Newcollections = () => {
  return (
    <div className='NewCollections'>
      <h1>New Collections</h1>
      <hr />
      <div className='collections'>
        {new_Colections.map((items, i) => {
          return <Items key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price} />;
        })}
      </div>
    </div>
  );
};

export default Newcollections;
