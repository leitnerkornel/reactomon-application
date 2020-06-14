import React from 'react';
/* import PokemonCardTitle from './PokemonCardTitle';*/
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_PICTURE_URL } from '../../Constants';

const PokemonCard = (props) => {
  const getPokemonIdFromUrl = () => {
    let urlArray = props.pokemon.url.split('/');
    return parseInt(urlArray[urlArray.length - 2]);
  };

  const name = props.pokemon.name;
  const pokemonId = getPokemonIdFromUrl();

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
        <div style={cardStyle} className='pokemon-card'>
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

const cardStyle = {};

export default PokemonCard;
