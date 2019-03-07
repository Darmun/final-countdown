import React, { Component } from 'react';
import './App.css';
import Countdown from './Components/Countdown'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My starting point! </h1>
        <Countdown />
      </div>
    );
  }
}

export default App;
