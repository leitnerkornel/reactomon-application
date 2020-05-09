import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonDetailPicture from './PokemonDetailPicture';
import PokemonDetailProperties from './PokemonDetailProperties';
import PokemonDetailAbilities from './PokemonDetailAbilities';
import PokemonDetailTypes from './PokemonDetailTypes';

class PokemonDetail extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <PokemonDetailPicture
          pictureId={this.props.currentId}
          title={this.props.name}
        />
        <PokemonDetailProperties
          name={this.props.name}
          experience={this.props.base_experience}
          height={this.props.height}
          weight={this.props.weight}
        />
        <PokemonDetailAbilities abilities={this.props.pokemonAbilities} />
        <PokemonDetailTypes types={this.props.pokemonTypes} />
      </div>
    );
  }
}

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
