import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Listing from "./components/Listing/Listing"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Basic Listing App</a>
          </div>
        </nav> 
        <div className="container">
          <Listing />
        </div>
      </div>
      
    );
  }
}

export default App;
