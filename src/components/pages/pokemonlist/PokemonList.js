import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { v4 as uuidv4 } from 'uuid';

import "./PokemonList.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  //const [offset, setOffset] = useState(0);
  //const [limit, setLimit] = useState(9);
  const offset = 0;
  const limit = 9;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_POKEMON_BASE_URL}?offset=${offset}&limit=${limit}`)
      .then((res) => setPokemons(res.data.results));
  }, [limit, offset]);

  const displayRows = () => {
    const rows = [];
    const numberOfColumns = 3;
    const numberOfRows = pokemons.length / numberOfColumns;
    let counter = 0;

    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
      let row = [];
      for (
        let columnNumber = 0;
        columnNumber < numberOfColumns;
        columnNumber++
      ) {
        row.push(<PokemonCard key={uuidv4()} pokemon={pokemons[counter++]} />);
      }
      rows.push(
        <div key={uuidv4()} className='pokemon-list-row'>
          {row}
        </div>
      );
    }

    return rows;
  };

  return <div className='pokemon-card-container'>{pokemons.map((pokemon) => {
    return <PokemonCard key={uuidv4()} pokemon={pokemon}/>
  })}</div>;
};

export default PokemonList;
