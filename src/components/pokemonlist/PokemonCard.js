import React, { Component } from 'react';
import PokemonCardTitle from './PokemonCardTitle';
import PokemonCardPicture from './PokemonCardPicture';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.css';

class PokemonCard extends Component {
  getPokemonIdFromUrl = () => {
    let urlArray = this.props.pokemon.url.split('/');
    return parseInt(urlArray[urlArray.length - 2]);
  };

  render() {
    const name = this.props.pokemon.name;
    const pokemonId = this.getPokemonIdFromUrl();

    return (
      <div style={{ margin: '10px' }}>
        <Link to={`/pokemon/${pokemonId}`}>
          <div style={cardStyle} className={'card'}>
            <PokemonCardPicture pictureId={pokemonId} title={name} />
            <PokemonCardTitle title={name} />
          </div>
        </Link>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '300px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '10px',
  padding: '10px',
  margin: 'auto',
};

export default PokemonCard;
