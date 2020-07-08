import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Notes from './notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Notes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
