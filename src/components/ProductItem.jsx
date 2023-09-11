import React from 'react';

const ProductItem = ({ product, isSelected, onClick }) => {
  return (
    <div className="product-item">
      <div className="product-header" onClick={() => onClick(product.id)}>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      {isSelected && (
        <div className="product-details">
          <p>Description: {product.description}</p>
          <p>Expiry Date: {product.expirationDate}</p>
          <p>Category : {product.category}</p>
        </div>
      )}
    </div>
  );
};

export default ProductItem;

