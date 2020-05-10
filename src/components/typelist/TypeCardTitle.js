import React from 'react';
import PropTypes from 'prop-types';

const TypeCardTitle = (props) => {
  let content = <div>{props.title}</div>;

  return content;
};

TypeCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TypeCardTitle;
