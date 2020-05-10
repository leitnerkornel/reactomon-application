import React from 'react';
import PropTypes from 'prop-types';

const PokemonCardPicture = (props) => {
  let content = (
    <div>
      <img
        style={imgStyle}
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.pictureId}.png`}
        alt={`This is: ${props.title}`}
        draggable='false'
      />
    </div>
  );

  return content;
};

PokemonCardPicture.propTypes = {
  pictureId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const imgStyle = {
  padding: '10px',
  height: 200,
  width: 200,
};

export default PokemonCardPicture;
