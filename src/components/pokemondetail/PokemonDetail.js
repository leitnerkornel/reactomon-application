import React from 'react';
import PropTypes from 'prop-types';
import PokemonDetailPicture from './PokemonDetailPicture';
import PokemonDetailProperties from './PokemonDetailProperties';
import PokemonDetailAbilities from './PokemonDetailAbilities';
import PokemonDetailTypes from './PokemonDetailTypes';

const PokemonDetail = (props) => {
  let content = (
    <div style={{ textAlign: 'center' }}>
      <PokemonDetailPicture pictureId={props.currentId} title={props.name} />
      <PokemonDetailProperties
        name={props.name}
        experience={props.base_experience}
        height={props.height}
        weight={props.weight}
      />
      <PokemonDetailAbilities abilities={props.pokemonAbilities} />
      <PokemonDetailTypes types={props.pokemonTypes} />
    </div>
  );

  return content;
};

PokemonDetail.propTypes = {
  currentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  base_experience: PropTypes.string.isRequired,
  pokemonTypes: PropTypes.array.isRequired,
  pokemonAbilities: PropTypes.array.isRequired,
};

export default PokemonDetail;
