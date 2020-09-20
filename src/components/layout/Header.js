import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
      <header style={headerStyle}>
        <h1>
          <span style={pokeStyle}>Poké</span>
          <span style={cyclopediaStyle}>Cyclopedia</span>
        </h1>
        <Navbar/>
      </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  width: '100vW'
};

const cyclopediaStyle = {
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  OUserSelect: 'none',
  unselectable: 'on',
  onselectstart: 'return false',
  onmousedown: 'return false',
  padding: '5px',
  borderRadius: '15px',
  background: '#f00',
  color: '#fff',
};

const pokeStyle = {
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  OUserSelect: 'none',
  unselectable: 'on',
  onselectstart: 'return false',
  onmousedown: 'return false',
  fontStyle: 'italic',
  padding: '5px',
  borderRadius: '15px',
  background: '#fff',
  color: '#f00',
};

export default Header;
