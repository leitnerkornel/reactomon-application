import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonCardTitle extends Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}

PokemonCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PokemonCardTitle;
