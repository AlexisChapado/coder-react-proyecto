import React from 'react'
import ItemList from './ItemList.jsx'

export const ItemListContainer = ({ greeting }) => {

    const eventos = [
      { id: 1, name: "Ultra Music Festival", price: 200 },
      { id: 2, name: "Tomorrowland", price: 375 },
      { id: 3, name: "Love Land", price: 150 },
      { id: 4, name: "Awakening Festival", price: 350 },
      { id: 5, name: "Forja - Mariano Mellino", price: 50 },
      { id: 6, name: "Forja - Hernan Cattaneo", price: 150 },
      { id: 7, name: "Forja - Nick Warren", price: 50 },
      { id: 8, name: "Forja - Sasha", price: 50 },
      { id: 10, name: "La Estacion - The YellowHeads", price: 30 },
      { id: 11, name: "La Fabrica - Miss Monique", price: 30 }
    ];
  
    return (
      <div>
        <h3>{greeting}</h3>
        <ItemList eventos={eventos} />
      </div>
    );
  };

  export default ItemListContainer;
