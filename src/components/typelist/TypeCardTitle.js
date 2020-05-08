import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeCardTitle extends Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}

TypeCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TypeCardTitle;
