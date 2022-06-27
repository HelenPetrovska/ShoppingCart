import React, { useState } from 'react';
import { ShoppingCartItem } from '../types';
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import Total from './Total';

const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);

  const add = (id: string, q: number) => {
    const isTrueItem = items.find((item) => item.productId === id);
    const newItem = {
      productId: id,
      quantity: q,
    };

    if (!isTrueItem) {
      setItems((currentItems) => [...currentItems, newItem]);
    } else {
      isTrueItem.quantity += q;
      setItems([...items]);
    }
  };

  const deleteItem = (item: ShoppingCartItem) => {
    setItems(items.filter((curr) => curr !== item));
  };

  const inc = (item:ShoppingCartItem) => {
    const index = items.indexOf(item);

    // eslint-disable-next-line no-param-reassign
    item.quantity += 1;
    items[index] = item;

    setItems([...items]);
  };

  const dec = (item: ShoppingCartItem) => {
    const index = items.indexOf(item);

    // eslint-disable-next-line no-param-reassign
    item.quantity -= 1;
    items[index] = item;

    setItems([...items]);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <>
      <AddItemForm
        add={add}
      />
      <ItemsList
        items={items}
        inc={inc}
        dec={dec}
        deleteItem={deleteItem}
      />
      <Total
        items={items}
        clear={clear}
      />
    </>
  );
};

export default ShoppingCart;
