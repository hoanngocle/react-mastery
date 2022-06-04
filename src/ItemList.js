import React from 'react';
import ItemRow from './ItemRow';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <ItemRow
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
