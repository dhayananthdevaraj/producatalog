import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductId: null,
    };
  }

  handleProductClick = (productId) => {
    this.setState({ selectedProductId: productId });
  };

  render() {
    const { products } = this.props;
    const { selectedProductId } = this.state;

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isSelected={product.id === selectedProductId}
            onClick={this.handleProductClick}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
