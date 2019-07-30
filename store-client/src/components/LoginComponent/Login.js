import React, { Component } from 'react';

import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      userName: '',
      password:'',        
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const userName = this.state.userName;
    const password = this.state.password;

    this.props.onSubmit(userName, password);
  }

  render() {
    return (
      <div className="loginContainer">
        <form className="formContainer" onSubmit={this.onFormSubmit}>
          <div className="container">
            <label htmlFor="name" >User name</label>
            <input type="text"
              placeholder="Enter Username" 
              name="userName" 
              value={this.state.userName}
              onChange={this.handleChange}
              required
             />

            <label htmlFor="password"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password"
              value={this.state.password}
              onChange={this.handleChange} 
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" name="remember"/> Remember me
            </label>
            
          </div>
          <div className="container" style={{backgroundColor: "#f1f1f1"}}>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
