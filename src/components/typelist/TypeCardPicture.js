import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeCardPicture extends Component {
  render() {
    return (
      <div>
        <img
          style={imgTypeStyle}
          //src={`https://pokeres.bastionbot.org/images/pokemon/1.png`}
          src={`/pokemon_types/${this.props.pictureName}.png`}
          alt={`This is: ${this.props.pictureName}`}
          //src/pokemon_types/bug.png
          //src/pokemon_types/fighting.png
          //home/kornel/advanced/reactomon_app/reactomon/src/pokemon_types/dark.png
          draggable='false'
        />
      </div>
    );
  }
}

TypeCardPicture.propTypes = {
  pictureName: PropTypes.string.isRequired,
};

const imgTypeStyle = {
  padding: '10px',
  height: 100,
  width: 100,
};

export default TypeCardPicture;
