import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/LoginComponent/Login';
import Signup from './components/SignupComponent/Signup';
import Dashboard from './components/DashboardComponent/Dashboard'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
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
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);            
            if (response.isLoggedIn) {
              console.log('success');
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



  render() {
    const { isLoggedIn } = this.state;
    // if(redirect){
    //   return <Redirect to = "/signup" />;
    // }
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={() => (
          isLoggedIn ? (
            <Dashboard/>
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
          

          {/* <Route exact path="/" component={Dashboard}/> */}
          {/* <Route path="/login">
            <Login onSubmit={this.onLoginSubmit}/>
          </Route> */}
          <Route path="/signup">
            <Signup onSubmit={this.onSignupSubmit}/>
          </Route>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
