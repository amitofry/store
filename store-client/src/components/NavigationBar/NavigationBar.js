import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  onSearchCliked = (event) => {
    event.preventDefault();
    const value = this.state.value;
    this.props.onSearch(value);
  }
  
  render(){
    return (        
      <nav className="navbar navbar-expand-sm navbar-light bg-light mx-auto">
        {/* <a className="navbar-brand" href="#">Store</a> */}
        <Link to="/" className="navbar-brand">Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">            
          <ul className="navbar-nav mr-auto">
            {this.props.routes.map((route, index)=>(
            <li key={route.text} className="nav-item">
              <Link to={route.href} className="nav-link">{route.text}</Link>
            </li>
            ))}
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onSearchCliked}>Search</button>
          </form>

        </div>
      </nav>
    ); 
  }
 
} 

export default NavigationBar;
