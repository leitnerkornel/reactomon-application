import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>
          <span style={pokéStyle}>Poké</span>Cyclopedia
        </h1>
      </header>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const pokéStyle = {
  color: '#f00',
};

export default Header;
