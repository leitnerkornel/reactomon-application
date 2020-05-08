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
      <div>
        <PokemonCardPicture pictureId={pokemonId} title={name} />
        <PokemonCardTitle title={name} />
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
