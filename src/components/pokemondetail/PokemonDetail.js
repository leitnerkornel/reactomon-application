import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonDetail extends Component {
  render() {
    return (
      <div>
        This is a PokemonDetail component
        {this.props.currentId}
        {this.props.name}
        {this.props.height}
        {this.props.weight}
        {this.props.base_experience}
        {this.props.pokemonTypes}
        {this.props.pokemonAbilities}
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
