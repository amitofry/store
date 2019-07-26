import React, { Component } from 'react';
import Login from './components/LoginComponent/Login';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      password:''
    };
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  onLoginSubmit(event) {
    event.preventDefault();
    alert(this.state.name)
    alert(this.state.password)
    // My logic when i want to submit.
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
       <Login 
        onSubmit={this.onLoginSubmit} 
        handleChange={this.handleChange}
        state={this.state}
       />
      </div>
    );
  }
}

export default App;
