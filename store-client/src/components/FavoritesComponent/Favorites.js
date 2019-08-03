import React from 'react';
import Product from '../ProductComponent/Product';
import './Favorites.css'

let places = ["Cape Town","New York"];

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userFavorites: []
    };
  }

  componentDidMount()
  {
    fetch('http://localhost:3001/GetUserFavorites/amit')
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then((data) => {
            this.setState({
              userFavorites : data
            });
          });
        }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
  }

  render = () => {
    let userFavorites = this.state.userFavorites;    
    return (
      <div>
        <h1>Favorites</h1>
        <div className={'favorites-container'}>
          {this.props.productList.map((product, index) => {

            let favoriteProducts = userFavorites.find((favoriteProduct)=>{
              return product.name.localeCompare(favoriteProduct) === 0;
            })

            if(favoriteProducts !== undefined)
            {
              return (
                <Product key={product.name + index}
                {...product}
                onAddToCart={this.props.onAddToCart}
                onAddToFavorites={this.props.onAddToFavorites} 
                userName={this.props.userName}/>        
              );
            }
            return;
          })}
      </div>
    </div>      

    )
  }
}


export default Favorites;
