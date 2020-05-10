import React from 'react';
import TypeCardTitle from './TypeCardTitle';
import TypeCardPicture from './TypeCardPicture';
import PropTypes from 'prop-types';

const TypeCard = (props) => {
  const name = props.type.name;
  let content = (
    <div style={typeCardStyle} className={'type-card'}>
      <TypeCardPicture pictureName={name} />
      <TypeCardTitle title={name} />
    </div>
  );

  return content;
};

TypeCard.propTypes = {
  type: PropTypes.object.isRequired,
};

const typeCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default TypeCard;
