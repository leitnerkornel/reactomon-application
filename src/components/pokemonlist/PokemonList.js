import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class PokemonList extends Component {
  render() {
    return (
      <div style={pokemonListStyle} className='card-container'>
        {this.props.pokemons.map((item) => (
          <PokemonCard
            getDetails={this.props.getDetails}
            key={uuidv4()}
            pokemon={item}
          />
        ))}
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getDetails: PropTypes.func.isRequired,
};

const pokemonListStyle = {
  width: '1000px',
  display: 'flex',
  flexFlow: 'row wrap',
  textAlign: 'center',
  alignContent: 'center',
};

export default PokemonList;
