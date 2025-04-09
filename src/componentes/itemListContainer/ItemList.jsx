import React from 'react'
import { Items } from './Items';
import { ItemListContainer } from './ItemListContainer';

export const ItemList = ({ eventos }) => {
    console.log();
    
  return (
      <div>
          {eventos.map((e) => <Items ticket={e} />)}
      </div>
  )
}

export default ItemList;
