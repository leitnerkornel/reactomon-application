import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonCardPicture extends Component {
  render() {
    return (
      <div>
        <img
          style={imgStyle}
          src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.pictureId}.png`}
          alt={`This is: ${this.props.title}`}
          draggable='false'
        />
      </div>
    );
  }
}

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
