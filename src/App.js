import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';

import './App.css';
import axios from 'axios';
import PokemonList from './components/pokemonlist/PokemonList';
import TypeList from './components/typelist/TypeList';
import PokemonDetail from './components/pokemondetail/PokemonDetail';

const App = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => setTypes(res.data.results));
  }, []);

  let content = (
    <Router>
      <div className='App'>
        <Header />
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        />
        <Route
          path='/pokemons'
          render={(props) => (
            <React.Fragment>
              <PokemonList />
            </React.Fragment>
          )}
        />
        <Route
          path='/types'
          render={(props) => (
            <React.Fragment>
              <TypeList types={types} />
            </React.Fragment>
          )}
        />
        <Route
          path={'/pokemon/:pokemonId'}
          render={(props) => (
            <React.Fragment>
              <PokemonDetail />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );

  return content;
};

export default App;
