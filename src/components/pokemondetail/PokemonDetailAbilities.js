import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const PokemonDetailAbilities = (props) => {
  let content = (
    <div>
      <h3>Abilities</h3>
      {props.abilities.map((item) => {
        return <li key={uuidv4()}>{item}</li>;
      })}
    </div>
  );
  return content;
};

PokemonDetailAbilities.propTypes = {
  abilities: PropTypes.array.isRequired,
};

export default PokemonDetailAbilities;
