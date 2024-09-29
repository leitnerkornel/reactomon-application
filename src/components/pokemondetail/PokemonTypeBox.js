import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './PokemonTypeBox.css'

const PokemonTypeBox = ({ pokemonTypes }) => {
  return (
    <div className="pokemon-type-container">
      {pokemonTypes.map((item) => {
        return (
          <div
            key={uuidv4()}
            className="detail-type-item"
          >
            <img
              className="detail-type-image"
              src={`/pokemon_types/${item}.png`}
              alt={`This is: ${item}`}
              draggable="false"
            />
            <h4 key={uuidv4()}>{item}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonTypeBox
