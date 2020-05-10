import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const PokemonDetailTypes = (props) => {
  let content = (
    <div>
      <h3>Types</h3>
      {props.types.map((item) => {
        return [
          <img
            key={uuidv4()}
            style={imgStyle}
            src={`/pokemon_types/${item}.png`}
            alt={`This is: ${item}`}
            draggable='false'
          />,
          <h5 key={uuidv4()}>{item}</h5>,
        ];
      })}
    </div>
  );

  return content;
};

PokemonDetailTypes.propTypes = {
  types: PropTypes.array.isRequired,
};

const imgStyle = {
  padding: '10px',
  height: 100,
  width: 100,
};

export default PokemonDetailTypes;
