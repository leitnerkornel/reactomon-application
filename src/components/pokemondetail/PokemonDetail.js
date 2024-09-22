import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';

import { capitalize } from '../../Utils';
import { API_POKEMON_URL } from '../../Constants';

const PokemonDetail = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [baseExperience, setBaseExperience] = useState('');

  const { pokemonId } = useParams()
  const imageSrc = `${process.env.REACT_APP_PICTURE_BASE_URL}${name}.jpg`

  useEffect(() => {
    axios.get(`${API_POKEMON_URL}/${pokemonId}`).then((res) => {
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
  }, [pokemonId]);

  const pictureNameCatchButton = () => {
    return (
      <div className='detail-page-top-block'>
        <div className='detail-page-image-container'>
          <img
            className='detail-page-image'
            src={imageSrc}
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
    );
  };

  const propertiesAndAbilities = () => {
    return (
      <div className='abilities-container'>
        <div className='detail-properties'>
          <div className='detail-property-item'>
            <div className='detail-property-title'>Experience:</div>
            <div className='detail-property-value'>{baseExperience}</div>
          </div>
          <div className='detail-property-item'>
            <div className='detail-property-title'>Height:</div>
            <div className='detail-property-value'>{height}</div>
          </div>
          <div className='detail-property-item'>
            <div className='detail-property-title'>Weight:</div>
            <div className='detail-property-value'>{weight}</div>
          </div>
        </div>
        <div className='detail-abilities'>
          <div>
            <div className='ability-container'>
              <h3>Abilities</h3>
              {pokemonAbilities.map((item) => {
                return (
                  <div key={uuidv4()} className='detail-ability-name'>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayPokemonTypes = () => {
    return (
      <div className='detail-type-container'>
        {pokemonTypes.map((item) => {
          return (
            <div
              key={uuidv4()}
              className='detail-type-item'
            >
              <img
                className='detail-type-image'
                src={`/pokemon_types/${item}.png`}
                alt={`This is: ${item}`}
                draggable='false'
              />
              <h4 key={uuidv4()}>{item}</h4>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='detail-page-container' style={{ textAlign: 'center' }}>
      {pictureNameCatchButton()}
      {propertiesAndAbilities()}
      {displayPokemonTypes()}
    </div>
  );
};

export default PokemonDetail;
