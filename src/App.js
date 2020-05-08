import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import './App.css';
import axios from 'axios';
import PokemonList from './components/pokemonlist/PokemonList';
import TypeList from './components/typelist/TypeList';

class App extends Component {
  state = {
    pokemons: [],
    types: [],
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({ pokemons: res.data.results }));
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    console.log(this.state.types);
    console.log(this.state);
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
            render={(props) => (
              <React.Fragment>
                <div>Types page</div>
                <TypeList types={this.state.types} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
