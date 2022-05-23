import React from 'react';

const ProductItem = ({ items }) => {
  
  return (
    <ul className='list-group mb-4'>
      {items.map(item => (
        <li key={item.id} className='list-group-item'>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ProductItem;