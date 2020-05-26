import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/cart/cart.actions';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;
  const handleClick = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton type='button' inverted='true' onClick={handleClick}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
