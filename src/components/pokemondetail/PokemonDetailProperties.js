import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PokemonDetailProperties extends Component {
  capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  render() {
    return (
      <div>
        <h2>{this.capitalize(this.props.name)}</h2>
        <ul>
          <li>Experience: {this.props.experience}</li>
          <li>Height: {this.props.height}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

PokemonDetailProperties.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default PokemonDetailProperties;
