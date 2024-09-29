import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './PokemonAbilitiesBox.css'

const PokemonAbilitiesBox = ({ pokemonAbilities }) => {
  return (
    <div className="pokemon-abilities-container">
      <h3>Abilities</h3>
      {pokemonAbilities.map((item) => {
        return (
          <div
            key={uuidv4()}
            className="detail-ability-name"
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default PokemonAbilitiesBox
