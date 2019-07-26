import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <form onSubmit={this.props.onSubmit}>
          <div className="container">
            <label htmlFor="name" ><b>Username</b></label>
            <input type="text"
              placeholder="Enter Username" 
              name="name" 
              value={this.props.state.name}
              onChange={this.props.handleChange}
              required
             />

            <label htmlFor="password"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password"
              value={this.props.state.password}
              onChange={this.props.handleChange} 
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
