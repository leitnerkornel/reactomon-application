import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavbarItem extends Component {
  render() {
    const title = this.props.title;
    const route = `/${this.props.route}`;
    return (
      <Link to={route} style={linkStyle}>
        {title}
      </Link>
    );
  }
}

NavbarItem.propType = {
  key: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const linkStyle = {
  padding: '10px 30px 10px 30px',
  color: '#f00',
  textDecoration: 'none',
};

export default NavbarItem;
