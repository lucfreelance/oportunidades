import React from 'react';

const ProductCard = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg', price: 10 },
    { id: 2, name: 'Product 2', image: 'product2.jpg', price: 20 },
    { id: 3, name: 'Product 3', image: 'product3.jpg', price: 30 },
  ];

  return (
    <div className="product-card">
      {products.map((product) => (
        <div key={product.id}>
          <img src={require(`../images/${product.image}`).default} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
