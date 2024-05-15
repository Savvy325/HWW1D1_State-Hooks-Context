import { useState } from 'react';

const useInventory = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    const fakeProducts = [
      { id: 1, name: 'Shoes', price: 109.99 },
      { id: 2, name: 'iPhone', price: 1299 },
      { id: 3, name: 'Cheese', price: 5 },
    ];
    setProducts(fakeProducts);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return { products, fetchProducts, addProduct, removeProduct };
};

export default useInventory;