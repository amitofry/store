import React, { Component }  from 'react';

export const NavigationBar = (props)=> {
      return (        
        <nav className="navbar navbar-expand-sm navbar-light bg-light mx-auto">
          <a className="navbar-brand" href="#">Store</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {props.routes.map((route, index)=>(
              <li key={route.text} className="nav-item">
                <a className="nav-link" href={route.href}>{route.text}</a>
              </li>
              ))}
            </ul>
          </div>
        </nav>
      );  
} 
  
