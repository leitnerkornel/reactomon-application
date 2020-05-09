import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonDetailPicture extends Component {
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
