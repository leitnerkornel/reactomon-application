import React from 'react';
import Navbar from './Navbar';

import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-image-container">
        <img className="header-image"
             src={"./pokecyclopedia_header.png"}
             alt="PokéCyclopedia header"
             draggable="false"
        />
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
