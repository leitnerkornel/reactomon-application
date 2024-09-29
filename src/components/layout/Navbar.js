import React from 'react'
import NavbarItem from './NavbarItem'

import './Navbar.css'

const Navbar = () => {
  const navbarTitles = [
    { id: 0, title: 'Home', route: '' },
    { id: 1, title: 'Pokémons', route: 'pokemons' },
    { id: 2, title: 'Types', route: 'types' },
    { id: 3, title: 'Collection', route: 'collection' },
    { id: 4, title: 'About', route: 'about' }
  ]

  return (
    <div className="navbar-container">
      {navbarTitles.map((item) => (
        <NavbarItem
          key={item.id}
          title={item.title}
          route={item.route}
        />
      ))}
    </div>
  )
}

export default Navbar
