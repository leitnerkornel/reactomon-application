import React from 'react'

import './CatchPokemonButton.css'

const CatchPokemonButton = ({
  isCatched,
  height = '85px',
  width = '200px'
}) => {
  return (
    <div
      className="catch-pokemon-button"
      style={{ height, width }}
    >
      <div className="detail-catch-button-image-container">
        <img
          className="pokeball-image"
          src={isCatched ? '/release_pokemon.svg' : '/catch_pokemon.svg'}
          alt="Catch this pokemon!"
        ></img>
      </div>
      <div className="detail-catch-text">{isCatched ? 'RELEASE' : 'CATCH'}</div>
    </div>
  )
}

export default CatchPokemonButton
