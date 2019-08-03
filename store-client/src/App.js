import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/LoginComponent/Login';
import Signup from './components/SignupComponent/Signup';
import Favorites from './components/FavoritesComponent/Favorites'
import Product from './components/ProductComponent/Product';
import Dashboard from './components/DashboardComponent/Dashboard'

import './App.css';
import ProductList from './components/ProductListComponent/ProductList';
import {NavigationBar} from './components/NavigationBar/NavigationBar';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      isLoggedIn: false,
      // isLoggedIn : true,
      productsList: []
    };  
  }

  componentDidMount() {    
    fetch('http://localhost:3001/GetProducts')
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then((data) => {
            this.setState({
              productsList: data
            })
          });
        }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
  }

  onLoginSubmit = (userName, password) => {    
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/LoginUser";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);           
            if (response.isLoggedIn) {
              console.log('success');
              this.setState({ 
                userName: response.userName,
                isLoggedIn: true 
              });
            } else {
              console.log('failure');
            }
            console.log("onLoginSubmit - User Name : ",this.state.userName)            
        }
    };    
    const data = JSON.stringify({
      userName,
      password
    });
    xhr.send(data);
  }

  onSignupSubmit = (userName, password, passwordRetype) => {    
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/SignupUser";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);            
            if (response.isSignedUp) {
              console.log('success');
              this.setState({ 
                // userName: response.userName,
                isLoggedIn: true 
              });
            } else {
              console.log('failure');
            }            
        }
    };    
    const data = JSON.stringify({
      userName,
      password,
      passwordRetype
    });
    xhr.send(data);
  }

  // getUserFavorites = () => 
  // {
  //   console.log("getUserFavorites - User Name : ",this.state.userName)
  //   // fetch('http://localhost:3001/GetUserFavorites/'+this.state.userName)
  //   fetch('http://localhost:3001/GetUserFavorites/amit')
  //     .then(
  //       (response) => {
  //         if (response.status !== 200) {
  //           console.log('Looks like there was a problem. Status Code: ' +
  //             response.status);
  //           return;
  //         }

  //         response.json().then((data) => {
  //           return data;
  //         });
  //       }
  //     )
  //     .catch((err) => {
  //       console.log('Fetch Error :-S', err);
  //   });
  // }

  onAddToCart = (product)=>{
    console.log('added to cart');
  }
  onAddToFavorites = (product, userName) => {    
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/AddProductToFavorites";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);            
            if (response.isAddedToFavorites) {
              console.log('added to favorites');
            } else {
              console.log('failed to add to favorites');
            }            
        }
    };    
    const data = JSON.stringify({
      userName,
      product
    });
    xhr.send(data);
    console.log('added to favorite')
  }

  render() {
    const { isLoggedIn } = this.state;
    const { userName } = this.state.userName;
    const routes = [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'Favorites',
        href: '/favorites'
      },
      {
        text: 'Login',
        href: '/login'
      }
    ]
    return (
      <div>
        <NavigationBar routes={routes} />
        <Router>
          <Switch>          
            <Route exact path="/" render={() => (
              isLoggedIn ? (          
                  <div>
                    <ProductList 
                      productList={this.state.productsList} 
                      onAddToCart={this.onAddToCart}
                      onAddToFavorites={this.onAddToFavorites}
                      userName={this.state.userName}>
                    </ProductList>
                  </div>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>

            <Route path="/login" render={() => (
              isLoggedIn ? (
                <Redirect to="/"/>
              ) : (
                <Route path="/login">
                  <Login onSubmit={this.onLoginSubmit}/>
                </Route>
              )
            )}/>
          
            <Route path="/signup" render={() => (
              isLoggedIn ? (
                <Redirect to="/"/>
              ) : (
                <Route path="/signup">
                  <Signup onSubmit={this.onSignupSubmit}/>
                </Route>
              )
            )}/>

            <Route path="/favorites">
              <Favorites 
                productList={this.state.productsList}
                // getUserFavorites={this.getUserFavorites}
              />
            </Route> 

          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
