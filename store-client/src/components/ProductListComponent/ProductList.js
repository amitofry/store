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
          if(product.name.startsWith(this.props.search)){
            return (
              <Product key={product.name + index}
              {...product}
              onAddToCart={this.props.onAddToCart}
              onAddToFavorites={this.props.onAddToFavorites} 
              userName={this.props.userName}/>        
            );
          }
        })}
      </div>
    )
  }
}


export default ProductList;
