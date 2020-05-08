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
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <div>Main page</div>
              </React.Fragment>
            )}
          />
          <Route
            path='/pokemons'
            render={() => (
              <React.Fragment>
                <div>Pokémons page</div>
              </React.Fragment>
            )}
          />
          <Route
            path='/types'
            render={() => (
              <React.Fragment>
                <div>Types page</div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
