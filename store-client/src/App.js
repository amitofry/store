import React, { Component } from 'react';
import Login from './components/LoginComponent/Login';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
  }
  onLoginSubmit = (userName, password) => {    
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/LoginUser";
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
      password
    });
    xhr.send(data);
  }



  render() {
    return (
      <div>
       <Login onSubmit={this.onLoginSubmit}/>
      </div>
    );
  }
}

export default App;
