import React from 'react';
import Product from '../ProductComponent/Product';
import './Cart.css'


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cart: []
    };
  }

  componentDidMount()
  {
    fetch('http://localhost:3001/GetUserCart/'+this.props.userName)
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then((data) => {
            this.setState({
              cart : data
            });
          });
        }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
  }

  onCheckOut = () => {   
    this.purchaseCart()
    alert ("Thanks for Buying at YOLO Vacations")
  }

  purchaseCart = () => {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/purchaseCart/"+this.props.userName;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);           
            if (response.isCartPurchased) {
              console.log('success');
              this.setState({ 
                cart:[]
              });
            } else {
              console.log('failure');
            }
        }
    };    
    const data = JSON.stringify({
    });
    xhr.send(data);
  }
    

  render = () => {
    let cart = this.state.cart;    
    return (
      <div>
        <h1>Cart</h1>
        <div className={'cart-container'}>
          {this.props.productList.map((product, index) => {

            let cartProducts = cart.find((cartProduct)=>{
              return product.name.localeCompare(cartProduct) === 0;
            })

            if(cartProducts !== undefined)
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
      <div className={'wrapper'}>
        <button className={'cart_submit'} class="btn btn-primary" onClick={this.onCheckOut}>
          Check Out!
        </button>
      </div>

    </div>      

    )
  }
}


export default Favorites;
