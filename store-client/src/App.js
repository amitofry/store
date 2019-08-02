import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/LoginComponent/Login';
import Signup from './components/SignupComponent/Signup';
import Product from './components/ProductComponent/Product';
import Dashboard from './components/DashboardComponent/Dashboard'

import './App.css';
import ProductList from './components/ProductListComponent/ProductList';
import {NavigationBar} from './components/NavigationBar/NavigationBar';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // isLoggedIn: false
      isLoggedIn : true,
      productsList: [
        {
          name:'Mimarch',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch2',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch2',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch2',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        },
        {
          name:'Mimarch2',
          price:`15$`,
          description:`The biggest Shambaz in the middle east`,
          imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
        }
      ]
    };
  
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
              this.setState({ isLoggedIn: true });
            } else {
              console.log('failure');
            }            
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
              this.setState({ isLoggedIn: true });
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

  onAddToCart = (product)=>{
    console.log('added to cart');
  }

  onAddToFavorites = (product) => {
    console.log('added to favorites');
  }

  render() {
    const { isLoggedIn } = this.state;
    const product = {
      name:'Mimarch',
      price:`15$`,
      description:`The biggest Shambaz in the middle east`,
      imageSrc:'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/57395730_10219199175509411_3820910177624784896_n.jpg?_nc_cat=107&_nc_oc=AQnWiPl9ayab6-MoQuYYOgESc-f7vom-ucus-EQ8WvEScXzCpmQWsd1coK77FNRDyjI&_nc_ht=scontent.ftlv6-1.fna&oh=d892da5a8a4e0927e74339da53afd83a&oe=5DE9AF24'
    }
    const routes = [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'Products',
        href: '/products'
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
                  <ProductList productList={this.state.productsList}></ProductList>
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

          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
