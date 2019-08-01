import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'

import './Signup.css'

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      userName: '',
      password:'',
      passwordRetype:''    
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
    const passwordRetype = this.state.passwordRetype;


    this.props.onSubmit(userName, password,passwordRetype);
  }

  render() {
    return (
      <div className="loginContainer">
        <form className="formContainer" onSubmit={this.onFormSubmit}>
          <div className="container">
            <div className="titleContainer">
              <h2>Sign Up</h2>
            </div>
            <label htmlFor="name" ><b>User name</b></label>
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

            <label htmlFor="password"><b>Password (Confirm)</b></label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="passwordRetype"
              value={this.state.passwordRetype}
              onChange={this.handleChange} 
              required
            />

            <button type="submit">Sign Up!</button>

            <Link to="/login">Log in</Link>
            
          </div>
          <div className="container" style={{backgroundColor: "#f1f1f1"}}>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
