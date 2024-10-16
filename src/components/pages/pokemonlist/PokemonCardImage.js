import React, { useState } from 'react'

import './PokemonCardImage.css'

const PokemonCardImage = ({ imageSrc, pokemonName }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <img
      className={`${isLoaded ? 'loaded' : ''} pokemon-card-image`}
      src={imageSrc}
      alt={`This is: ${pokemonName}.`}
      draggable="false"
      loading="lazy"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = '/pokemon_not_found.png'
      }}
      onLoad={() => {
        setIsLoaded(true)
      }}
    />
  )
}
export default PokemonCardImage
