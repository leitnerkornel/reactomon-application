import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetailPicture = (props) => {
  const { pictureId, title } = props;

  let content = (
    <div>
      <img
        style={imgStyle}
        src={`https://pokeres.bastionbot.org/images/pokemon/${pictureId}.png`}
        alt={`This is: ${title}`}
        draggable='false'
      />
    </div>
  );

  return content;
};

PokemonDetailPicture.propTypes = {
  pictureId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const imgStyle = {
  padding: '10px',
  height: 400,
  width: 400,
};

export default PokemonDetailPicture;
