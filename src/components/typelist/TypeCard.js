import React, { Component } from 'react';
import TypeCardTitle from './TypeCardTitle';
import TypeCardPicture from './TypeCardPicture';
import PropTypes from 'prop-types';

class TypeCard extends Component {
  render() {
    const name = this.props.type.name;
    return (
      <div style={typeCardStyle} className={'type-card'}>
        <TypeCardPicture pictureName={name} />
        <TypeCardTitle title={name} />
      </div>
    );
  }
}

TypeCard.propTypes = {
  type: PropTypes.object.isRequired,
};

const typeCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default TypeCard;
