import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

export const NavigationBar = (props)=> {
      return (        
        <nav className="navbar navbar-expand-sm navbar-light bg-light mx-auto">
          {/* <a className="navbar-brand" href="#">Store</a> */}
          <Link to="/" className="navbar-brand">Store</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">            
            <ul className="navbar-nav mr-auto">
              {props.routes.map((route, index)=>(
              <li key={route.text} className="nav-item">
                <Link to={route.href} className="nav-link">{route.text}</Link>
              </li>
              ))}
            </ul>
          </div>
        </nav>
      );  
} 
  
