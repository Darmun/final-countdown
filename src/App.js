import React, { Component } from 'react';
import './App.css';
import Countdown from './Components/Countdown'
import Controls from './Components/Controls'
class App extends Component {
  render() {
    return (
      <div>
        <Countdown />
        <Controls />
      </div>
    );
  }
}

export default App;
