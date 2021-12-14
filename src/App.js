import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
        url: window.location.host,
      };
    }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Subdomínio: {this.state.url.split(".")[0]}</h1>
        </header>
      </div>
    );
  }
}

export default App;
