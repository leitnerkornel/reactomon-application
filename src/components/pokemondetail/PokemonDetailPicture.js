import React, { useState } from 'react'

import './PokemonDetailPicture.css'

const PokemonDetailPicture = ({ imageSrc, pokemonName }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`${isLoaded ? 'loaded' : ''} pokemon-image-holder-container`}
    >
      <img
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/pokemon_not_found_400.png'
        }}
        onLoad={() => {
          setIsLoaded(true)
        }}
        className={`${isLoaded ? 'loaded' : ''} pokemon-detail-img`}
        src={imageSrc}
        alt={`This is: ${pokemonName}.`}
      />
    </div>
  )
}

export default PokemonDetailPicture
