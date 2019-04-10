import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="conatainer">
        <Hello/>
      </div>
    );
  }
}

export default App;
