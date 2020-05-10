import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetailProperties = (props) => {
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  let content = (
    <div>
      <h2>{capitalize(props.name)}</h2>
      <ul>
        <li>Experience: {props.experience}</li>
        <li>Height: {props.height}</li>
        <li>Weight: {props.weight}</li>
      </ul>
    </div>
  );
  return content;
};

PokemonDetailProperties.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default PokemonDetailProperties;
