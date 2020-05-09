import React, { Component } from 'react';
import PokemonCardTitle from './PokemonCardTitle';
import PokemonCardPicture from './PokemonCardPicture';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <div
            style={cardStyle}
            className={'card'}
            onClick={this.props.getDetails.bind(this, pokemonId)}
          >
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
  getDetails: PropTypes.func.isRequired,
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // display: 'inline-block',
  width: '300px',
  textAlign: 'center',
  border: '4px solid red',
  borderRadius: '5px',
  padding: '10px',
  margin: 'auto',
};

export default PokemonCard;
