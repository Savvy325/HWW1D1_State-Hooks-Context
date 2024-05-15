import React, { useEffect } from 'react';
import useInventory from '../hooks/useInventory';

const ProductList = () => {
  const { products, fetchProducts, removeProduct } = useInventory();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;