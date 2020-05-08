import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import './App.css';
import axios from 'axios';
import PokemonList from './components/pokemonlist/PokemonList';

class App extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({ pokemons: res.data.results }));
  }

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
            render={(props) => (
              <React.Fragment>
                <div>Pokémons page</div>
                <PokemonList pokemons={this.state.pokemons} />
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
