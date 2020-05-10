import React from 'react';
import TypeCard from './TypeCard';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TypeList = (props) => {
  let content = (
    <div className='type-container'>
      {props.types.map((item) => (
        <TypeCard key={uuidv4()} type={item} />
      ))}
    </div>
  );

  return content;
};

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
