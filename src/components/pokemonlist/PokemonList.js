import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((item) => (
      <PokemonCard key={uuidv4()} pokemon={item} />
    ));
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
