import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import './App.css';
import axios from 'axios';
import PokemonList from './components/pokemonlist/PokemonList';
import TypeList from './components/typelist/TypeList';
import PokemonDetail from './components/pokemondetail/PokemonDetail';

class App extends Component {
  state = {
    pokemons: [],
    types: [],
    currentId: '',
    name: '',
    height: '',
    weight: '',
    base_experience: '',
    pokemonTypes: [],
    pokemonAbilities: [],
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => this.setState({ pokemons: res.data.results }));
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((res) => this.setState({ types: res.data.results }));
  }

  getDetails = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      this.setState({
        currentId: res.data.id.toString(),
        name: res.data.name,
        height: res.data.height.toString(),
        weight: res.data.weight.toString(),
        base_experience: res.data.base_experience.toString(),
        pokemonTypes: res.data.types.map((item) => {
          return item.type.name;
        }),
        pokemonAbilities: res.data.abilities.map((item) => {
          return item.ability.name;
        }),
      })
    );
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            exact
            path='/'
            render={() => <React.Fragment></React.Fragment>}
          />
          <Route
            path='/pokemons'
            render={(props) => (
              <React.Fragment>
                <PokemonList
                  pokemons={this.state.pokemons}
                  getDetails={this.getDetails}
                />
              </React.Fragment>
            )}
          />
          <Route
            path='/types'
            render={(props) => (
              <React.Fragment>
                <TypeList types={this.state.types} />
              </React.Fragment>
            )}
          />
          <Route
            path={'/pokemon/:pokemonId'}
            render={(props) => (
              <React.Fragment>
                <PokemonDetail
                  currentId={this.state.currentId}
                  name={this.state.name}
                  height={this.state.height}
                  weight={this.state.weight}
                  base_experience={this.state.base_experience}
                  pokemonTypes={this.state.pokemonTypes}
                  pokemonAbilities={this.state.pokemonAbilities}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
