import React from 'react';
import PropTypes from 'prop-types';

const TypeCardPicture = (props) => {
  let content = (
    <div>
      <img
        style={imgTypeStyle}
        src={`/pokemon_types/${props.pictureName}.png`}
        alt={`This is: ${props.pictureName}`}
        draggable='false'
      />
    </div>
  );

  return content;
};

TypeCardPicture.propTypes = {
  pictureName: PropTypes.string.isRequired,
};

const imgTypeStyle = {
  padding: '10px',
  height: 100,
  width: 100,
};

export default TypeCardPicture;
