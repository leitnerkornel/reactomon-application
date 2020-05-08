import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route path='/' />
          <Route path='/pokemons' />
        </div>
      </Router>
    );
  }
}

export default App;
