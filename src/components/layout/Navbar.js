import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const navbarTitles = [
    { id: 0, title: 'Home', route: '' },
    { id: 1, title: 'Pokémons', route: 'pokemons' },
    { id: 2, title: 'Types', route: 'types' },
  ];

  let content = (
    <div style={navbarStyle} className='navbar-container'>
      {navbarTitles.map((item) => (
        <NavbarItem key={item.id} title={item.title} route={item.route} />
      ))}
    </div>
  );

  return content;
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: '#f00',
  fontWeight: 'bold',
};

export default Navbar;
