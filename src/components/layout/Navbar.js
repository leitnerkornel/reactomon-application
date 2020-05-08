import React, { Component } from 'react';
import NavbarItem from './NavbarItem';

class Navbar extends Component {
  render() {
    const navbarTitles = [
      { id: 1, title: 'Pokémons' },
      { id: 2, title: 'Types' },
    ];

    return (
      <div style={navbarStyle} className='navbar-container'>
        {navbarTitles.map((item) => (
          <NavbarItem key={item.id} title={item.title} />
        ))}
      </div>
    );
  }
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: '#f00',
  fontWeight: 'bold',
};

export default Navbar;
