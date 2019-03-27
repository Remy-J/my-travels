import React, { Component } from 'react';
import './App.css';
import Travel from './Components/Travel'
import Header from './Components/Header'
import Travels from './Components/Travels'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Travels/>
      </div>
    );
  }
}

export default App;
