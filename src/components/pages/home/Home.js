import React from 'react'

import HomeLinkButton from './HomeLinkButton'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="welcome-image"
        src={'./welcome_pokecyclopedia.png'}
        alt="Welcome to the PokéCyclopedia!"
        draggable="false"
      />
      <div className="home-link-container">
        <p className="home-detail-text">On this site you can browse</p>
        <HomeLinkButton
          route="pokemons"
          title="Pokémons"
        />
        <p className="home-detail-text">and their</p>
        <HomeLinkButton
          route="types"
          title="Types"
        />
      </div>
      <img
        className="home-image"
        src={'./favicon_pikachu256.png'}
        alt={'Pikatchu'}
        draggable="false"
      />
    </div>
  )
}

export default Home
