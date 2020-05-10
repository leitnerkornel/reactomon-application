import React from 'react';
import PropTypes from 'prop-types';

const PokemonCardTitle = (props) => {
  let content = <div>{props.title}</div>;

  return content;
};

PokemonCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PokemonCardTitle;
