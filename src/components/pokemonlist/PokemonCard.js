import React, { Component } from 'react';
import PokemonCardTitle from './PokemonCardTitle';
import PokemonCardPicture from './PokemonCardPicture';
import PropTypes from 'prop-types';

class PokemonCard extends Component {
  getPokemonIdFromUrl = () => {
    let urlArray = this.props.pokemon.url.split('/');
    return parseInt(urlArray[urlArray.length - 2]);
  };

  render() {
    const name = this.props.pokemon.name;
    const pokemonId = this.getPokemonIdFromUrl();

    return (
      <div style={cardStyle} className={'card'}>
        <PokemonCardPicture pictureId={pokemonId} title={name} />
        <PokemonCardTitle title={name} />
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

const cardStyle = {
  display: 'inline-block',
  width: '300px',
  textAlign: 'center',
  border: '4px solid red',
  borderRadius: '5px',
  margin: '10px 10px 10px 10px',
};

export default PokemonCard;
