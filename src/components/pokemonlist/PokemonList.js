import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { API_POKEMON_URL } from '../../Constants';

const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(18);

  useEffect(() => {
    axios
      .get(`${API_POKEMON_URL}?offset=${offset}&limit=${limit}`)
      .then((res) => setPokemons(res.data.results));
  });

  let content = (
    <div style={pokemonListStyle} className='card-container'>
      {pokemons.map((item) => (
        <PokemonCard key={uuidv4()} pokemon={item} />
      ))}
    </div>
  );

  return content;
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
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
