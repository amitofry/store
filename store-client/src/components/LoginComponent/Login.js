import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'


import './Login.css';

function validate(userName, password) {
  // true means invalid, so our conditions got reversed
  return {
    userName: userName.length === 0,
    password: password.length === 0
  };
}

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
    const errors = validate(this.state.userName, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div className="loginContainer">
        <form className="formContainer" onSubmit={this.onFormSubmit}>
          <div className="container">
          <div className="titleContainer">
            <h2>Log in</h2>
          </div>
          <label htmlFor="name" ><b>User name</b></label>
          
          <input
            // className={errors.userName ? "error" : ""} 
            type="text"
            placeholder="Enter Username" 
            name="userName" 
            value={this.state.userName}
            onChange={this.handleChange}
            required
            />


            <label htmlFor="password"><b>Password</b></label>
            <input
              // className={errors.password ? "error" : ""} 
              type="password" 
              placeholder="Enter Password" 
              name="password"
              value={this.state.password}
              onChange={this.handleChange} 
              required
            />

            <button type="submit" disabled={isDisabled}>Log in</button>
            
            <Link to="/signup">Signup</Link>
          </div>
          <div className="container" style={{backgroundColor: "#f1f1f1"}}>
          </div>
        </form>
      </div>

      
    );
  }
}

export default Login;
