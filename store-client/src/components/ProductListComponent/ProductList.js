import React  from 'react';
import Product from '../ProductComponent/Product';
import './ProductList.css'
/* ProductList */
class ProductList extends React.Component {
  constructor(props) {
    super(props);    
  }

  render = () => {    
    return (      
      <div className={'products-container'}>
        {this.props.productList.map((product, index) => {
          return (
            <Product key={product.name + index}
            {...product}
            onAddToCart={this.onAddToCart}
            onAddToFavorites={this.onAddToFavorites} />        
          );
        })}
      </div>
    )
  }
}


export default ProductList;
