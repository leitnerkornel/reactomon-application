import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_PICTURE_URL } from '../../Constants';
import { getPokemonIdFromUrl } from '../../Utils';

const PokemonCard = (props) => {
  const name = props.pokemon.name;
  const pokemonId = getPokemonIdFromUrl(props.pokemon.url);

  const cardPicture = () => {
    return (
      <div>
        <img
          className='pokemon-card-image'
          src={`${API_PICTURE_URL}${pokemonId}.png`}
          alt={`This is: ${props.title}`}
          draggable='false'
        />
      </div>
    );
  };

  return (
    <div style={{ margin: '10px' }}>
      <Link to={`/pokemon/${pokemonId}`}>
        <div className='pokemon-card'>
          {cardPicture()}
          <div>{name}</div>
        </div>
      </Link>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
