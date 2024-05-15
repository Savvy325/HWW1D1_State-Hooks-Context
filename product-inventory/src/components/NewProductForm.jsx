import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';

const NewProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { addProduct } = useInventory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", name, price)
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    console.log("Adding product:", newProduct);
    addProduct(newProduct);
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;