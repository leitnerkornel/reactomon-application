import React from 'react';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const PokemonList = (props) => {
  let content = (
    <div style={containerStyle}>
      <div style={pokemonListStyle} className='card-container'>
        {props.pokemons.map((item) => (
          <PokemonCard key={uuidv4()} pokemon={item} />
        ))}
      </div>
    </div>
  );

  return content;
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

const containerStyle = {
  width: '50%',
  margin: '0 auto',
};

const pokemonListStyle = {
  marginTop: '40px',
  width: '1000px',
  display: 'flex',
  flexFlow: 'row wrap',
  textAlign: 'center',
  alignContent: 'center',
};

export default PokemonList;
