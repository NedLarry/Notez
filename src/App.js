import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Notez from './components/Notez/Notez';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Notez />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
