import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className='cart-item'>
      <img className='image' src={imageUrl} alt='cart-item' />
      <div className='details'>
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
