import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/home/Home';

import './App.css';
import PokemonList from './components/pokemonlist/PokemonList';
import TypeList from './components/typelist/TypeList';
import PokemonDetail from './components/pokemondetail/PokemonDetail';

const App = () => {
  return (
      <Router>
        <div className='App'>
          <Header/>
          <Route
              exact
              path='/'
              render={() => (
                  <React.Fragment>
                    <Home/>
                  </React.Fragment>
              )}
          />
          <Route
              path='/pokemons'
              render={() => (
                  <React.Fragment>
                    <PokemonList/>
                  </React.Fragment>
              )}
          />
          <Route
              path='/types'
              render={() => (
                  <React.Fragment>
                    <TypeList/>
                  </React.Fragment>
              )}
          />
          <Route
              path={'/pokemon/:pokemonId'}
              render={() => (
                  <React.Fragment>
                    <PokemonDetail/>
                  </React.Fragment>
              )}
          />
        </div>
      </Router>
  );
};

export default App;
