import React, { useState } from "react";
import "./App.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (productName) => {
    setProducts([...products, { id: products.length + 1, name: productName }]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addProduct(event.target.elements.productName.value);
        }}
      >
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <button className="btn-blue">Add Product</button>
      </form>
    </div>
  );
};

export default ProductList;
