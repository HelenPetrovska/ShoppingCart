/* eslint-disable no-param-reassign */
import React from 'react';
import { PRODUCTS_MAP, ShoppingCartItem } from '../types';

type Props = {
  items: ShoppingCartItem[];
  clear: () => void;
};

const Total: React.FC<Props> = ({ items, clear }) => {
  const totalValue = items.reduce((acc, item) => {
    const price = PRODUCTS_MAP[item.productId]?.price || 0;

    acc += item.quantity * price;

    return acc;
  }, 0);

  return (
    <>
      <div>
        total
        {totalValue}
      </div>
      <button type="button" onClick={clear}>Clear</button>
    </>
  );
};

export default Total;
