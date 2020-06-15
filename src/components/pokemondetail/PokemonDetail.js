import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonDetailProperties from './PokemonDetailProperties';
import PokemonDetailAbilities from './PokemonDetailAbilities';
import PokemonDetailTypes from './PokemonDetailTypes';
import { getPokemonIdFromWindowUrl, capitalize } from '../../Utils';
import { API_PICTURE_URL, API_POKEMON_URL } from '../../Constants';

const PokemonDetail = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [baseExperience, setBaseExperience] = useState('');

  const currentPokemonId = getPokemonIdFromWindowUrl();

  useEffect(() => {
    axios.get(`${API_POKEMON_URL}/${currentPokemonId}`).then((res) => {
      setName(res.data.name);
      setHeight(res.data.height.toString());
      setWeight(res.data.weight.toString());
      setBaseExperience(res.data.base_experience.toString());
      setPokemonTypes(
        res.data.types.map((item) => {
          return item.type.name;
        })
      );
      setPokemonAbilities(
        res.data.abilities.map((item) => {
          return item.ability.name;
        })
      );
    });
  }, [currentPokemonId]);

  return (
    <div className='detail-page-container' style={{ textAlign: 'center' }}>
      <div className='detail-page-top-block'>
        <div className='detail-page-image-container'>
          <img
            className='detail-page-image'
            src={`${API_PICTURE_URL}${currentPokemonId}.png`}
            alt={`This is: ${name}.`}
            draggable='false'
          />
        </div>
        <div className='name-catch-button-block'>
          <div className='detail-pokemon-name'>
            <h2>{capitalize(name)}</h2>
          </div>
          <div className='detail-page-catch-button'>
            <div className='catch-button-item'>
              <div className='detail-catch-button-image-container'>
                <img
                  className='pokeball-image'
                  src='/pokeball.png'
                  alt='Catch this pokemon!'
                ></img>
              </div>
              <div className='detail-catch-text'>{'Catch!'.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>

      <PokemonDetailProperties
        experience={baseExperience}
        height={height}
        weight={weight}
      />
      <PokemonDetailAbilities abilities={pokemonAbilities} />
      <PokemonDetailTypes types={pokemonTypes} />
    </div>
  );
};

export default PokemonDetail;
