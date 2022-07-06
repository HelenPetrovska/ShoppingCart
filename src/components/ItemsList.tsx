import React from 'react';
import { PRODUCTS_MAP, ShoppingCartItem } from '../types';

type Props = {
  items: ShoppingCartItem[];
  inc: (item: ShoppingCartItem) => void;
  dec: (item: ShoppingCartItem) => void;
  deleteItem: (item: ShoppingCartItem) => void;
};

const ItemsList: React.FC<Props> = ({
  items, inc, dec, deleteItem,
}) => {
  return (
    <>
      {items.map((item) => {
        const product = PRODUCTS_MAP[item.productId];
        const price = product?.price || 0;

        // eslint-disable-next-line no-console
        console.log(PRODUCTS_MAP);

        return (
          <div key={item.productId}>
            <div>
              name
              {product?.label}
            </div>
            <div>
              quantity
              {item.quantity}
            </div>
            <div>
              price
              {price}
            </div>
            <div>
              <button type="button" onClick={() => inc(item)}>+</button>

              <button
                type="button"
                onClick={
                  (item.quantity === 1)
                    ? () => deleteItem(item)
                    : () => dec(item)
                }
              >
                -
              </button>

              <button type="button" onClick={() => deleteItem(item)}>x</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemsList;
