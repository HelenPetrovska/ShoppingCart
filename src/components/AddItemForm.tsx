import React from 'react';
import { ALL_PRODUCTS } from '../types';

type Props = {
  add: (productId:string, quantity: number) => void;
};

const AddItemForm: React.FC<Props> = ({ add }) => {
  const [productId, setProductId] = React.useState<string>('');
  const [quantity, setQuantity] = React.useState<number>(0);

  return (
    <>
      <label htmlFor="quantity">
        <input
          type="number"
          name="quantity"
          className="input"
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
        />
      </label>

      <select
        name="users"
        className="select"
        value={productId}
        onChange={(event) => setProductId(event.target.value)}
      >
        {ALL_PRODUCTS.map(product => (
          <option
            key={product.id}
            value={product.id}
          >
            {product.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="submit"
        onClick={() => add(productId, quantity)}
      >
        ADD
      </button>
    </>
  );
};

export default AddItemForm;
