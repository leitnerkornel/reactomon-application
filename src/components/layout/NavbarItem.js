import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
  const title = props.title;
  const route = `/${props.route}`;

  let content = (
    <Link to={route} style={linkStyle}>
      {title}
    </Link>
  );
  return content;
};

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
