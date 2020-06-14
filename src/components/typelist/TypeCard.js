import React from 'react';
import PropTypes from 'prop-types';

const TypeCard = (props) => {
  const name = props.type.name;
  let content = (
    <div className={'type-card'}>
      <div>
        <img
          className='type-image'
          src={`/pokemon_types/${name}.png`}
          alt={`This is: ${props.pictureName}`}
          draggable='false'
        />
      </div>
      <div>{name}</div>
    </div>
  );

  return content;
};

TypeCard.propTypes = {
  type: PropTypes.object.isRequired,
};

export default TypeCard;
