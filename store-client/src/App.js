import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/LoginComponent/Login';
import Signup from './components/SignupComponent/Signup';
import Favorites from './components/FavoritesComponent/Favorites'
import Concerts from './components/ConcertsComponent/Concerts'
import UpcomingEvents from './components/UpcomingEventsComponent/UpcomingEvents'
import Cart from './components/CartComponent/Cart'
import Homepage from './components/HomepageComponent/Homepage'
import Admin from './components/AdminComponent/Admin'
import Product from './components/ProductComponent/Product';
import Dashboard from './components/DashboardComponent/Dashboard'
import Cookies from 'js-cookie';

import './App.css';
import ProductList from './components/ProductListComponent/ProductList';
// import {NavigationBar} from './components/NavigationBar/NavigationBar';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      isLoggedIn: false,
      // cookie: { expire },
      // isLoggedIn: localStorage.getItem("isloggedin"),//false,
      // isLoggedIn : true,
      productsList: [],
      search:""
    };
    
    if(Cookies.get('cookie')){
      this.state = {
        userName: Cookies.getJSON('cookie').userName,
        isLoggedIn: Cookies.getJSON('cookie').isLoggedIn,
        productsList: [],
        search:""
      }
    }
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

  onLoginSubmit = (userName, password, rememberMe) => {    
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
                // isLoggedIn: localStorage.setItem("isloggedin", true),
                // expiry: localStorage.setItem("expiry", new Date().getTime()/1000)
              });
              let timeToExpire;
              if(rememberMe){
                timeToExpire = 365;
              }else{
                timeToExpire = new Date(new Date().getTime() + 5 * 60 * 60 * 1000)
              }
              Cookies.set('cookie', {
                userName: response.userName,
                isLoggedIn: true 
                }, { expires: timeToExpire });
            } else {
              console.log('failure');
            }
            console.log("onLoginSubmit - User Name : ",this.state.userName)            
        }
    };    
    const data = JSON.stringify({
      userName,
      password,
      rememberMe
    });
    xhr.send(data);
  }

  onSignupSubmit = (userName, password, passwordRetype, rememberMe) => {    
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
                userName: userName,
                isLoggedIn: true 
              });
              let timeToExpire;
              
              if(rememberMe){
                timeToExpire = 365;
              }else{
                timeToExpire = new Date(new Date().getTime() + 5 * 60 * 60 * 1000)
              }
              Cookies.set('cookie', {
                userName: response.userName,
                isLoggedIn: true 
                }, { expires: timeToExpire });
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


  onSearch = (input) => {
    this.setState({
      search: input
    })
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

  onAddToCart = (product, userName) => {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/AddProductToCart";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);            
            if (response.isAddedTocart) {
              console.log('added to cart');
            } else {
              console.log('failed to add to cart');
            }            
        }
    };    
    const data = JSON.stringify({
      userName,
      product
    });
    xhr.send(data);
    console.log('added to cart')
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const routes = [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'Vacations',
        href: '/products'
      },
      {
        text: 'Favorites',
        href: '/favorites'
      },
      {
        text: 'Cart',
        href: '/cart'
      },
      {
        text: 'Find a concert',
        href: '/concerts'
      },
      {
        text: 'Upcoming Events',
        href: '/upcoming-events'
      }
    ]
    if (this.state.userName=="admin"){
      routes[routes.length] = {
        text: 'Admin',
        href: '/admin'
      }
    }
    return (
      <div>
        <Router>
          <NavigationBar routes={routes} onSearch={this.onSearch}/>
          <Switch>          
            <Route exact path="/" render={() => (
              isLoggedIn ? (          
                  <div>
                    <Homepage/>
                  </div>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>

            <Route path="/products" render={() => (
              isLoggedIn ? (
                <div>
                <ProductList 
                  productList={this.state.productsList} 
                  onAddToCart={this.onAddToCart}
                  onAddToFavorites={this.onAddToFavorites}
                  userName={this.state.userName}
                  search={this.state.search}>
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

            <Route path="/favorites" render={() => (
              isLoggedIn ? (          
                  <div>
                    <Favorites 
                      productList={this.state.productsList}
                      userName={this.state.userName}
                    />
                  </div>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>

            <Route path="/concerts" render={() => (
              isLoggedIn ? (
                <div>
                  <Concerts
                    productList={this.state.productsList}
                    onAddToCart={this.onAddToCart}
                    onAddToFavorites={this.onAddToFavorites}
                    userName={this.state.userName}
                  />
                </div>
              ) : (
                  <Redirect to="/login" />
                )
            )} />

            <Route path="/upcoming-events" render={() => (
              isLoggedIn ? (
                <div>
                  <UpcomingEvents
                    productList={this.state.productsList}
                    onAddToCart={this.onAddToCart}
                    onAddToFavorites={this.onAddToFavorites}
                    userName={this.state.userName}
                  />
                </div>
              ) : (
                  <Redirect to="/login" />
                )
            )} />

            <Route path="/cart" render={() => (
              isLoggedIn ? (          
                  <div>
                    <Cart 
                      productList={this.state.productsList}
                      userName={this.state.userName}
                    />
                  </div>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>

            <Route path="/admin" render={() => (
              (isLoggedIn && this.state.userName == "admin")  ? (          
                  <div>
                    <Admin/>
                  </div>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>   

          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
