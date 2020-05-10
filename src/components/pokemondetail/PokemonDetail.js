import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonDetailPicture from './PokemonDetailPicture';
import PokemonDetailProperties from './PokemonDetailProperties';
import PokemonDetailAbilities from './PokemonDetailAbilities';
import PokemonDetailTypes from './PokemonDetailTypes';

const PokemonDetail = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  const [currentId, setCurrentId] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [baseExperience, setBaseExperience] = useState('');

  const getPokemonIdFromUrl = () => {
    let urlFragments = window.location.href.split('/');
    return urlFragments[urlFragments.length - 1];
  };

  const currentPokemonId = getPokemonIdFromUrl();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
      .then((res) => {
        setCurrentId(res.data.id.toString());
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

  let content = (
    <div style={{ textAlign: 'center' }}>
      <PokemonDetailPicture pictureId={currentId} title={name} />
      <PokemonDetailProperties
        name={name}
        experience={baseExperience}
        height={height}
        weight={weight}
      />
      <PokemonDetailAbilities abilities={pokemonAbilities} />
      <PokemonDetailTypes types={pokemonTypes} />
    </div>
  );

  return content;
};

export default PokemonDetail;
