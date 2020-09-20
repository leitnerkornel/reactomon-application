import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_PICTURE_URL } from '../../../Constants';
import { getPokemonIdFromUrl } from '../../../Utils';

const PokemonCard = (props) => {
  const name = props.pokemon.name;
  const pokemonId = getPokemonIdFromUrl(props.pokemon.url);

  const cardPicture = () => {
    return (
      <div>
        <img
          className='pokemon-card-image'
          src={`${API_PICTURE_URL}${pokemonId}.png`}
          alt={`This is: ${name}.`}
          draggable='false'
        />
      </div>
    );
  };

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className='pokemon-card'>
        {cardPicture()}
        <div className='pokemon-card-name'>{name}</div>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
