import React, { Component } from 'react';
import TypeCard from './TypeCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class TypeList extends Component {
  render() {
    return (
      <div className='type-container'>
        {this.props.types.map((item) => (
          <TypeCard key={uuidv4()} type={item} />
        ))}
      </div>
    );
  }
}

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
