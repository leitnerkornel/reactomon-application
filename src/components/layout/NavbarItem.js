import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarItem extends Component {
  render() {
    //const title = this.props.title;
    return <div style={navbarItemStyle}>{this.props.title}</div>;
  }
}

NavbarItem.propType = {
  key: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

const navbarItemStyle = {
  padding: '10px 30px 10px 30px',
  textAlign: 'center',
};

export default NavbarItem;
