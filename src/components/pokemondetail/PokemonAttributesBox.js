import React from 'react'

import './PokemonAttributesBox.css'

const PokemonAttributesBox = ({ pokemonAttributes: pokemonData }) => {
  return (
    <div className="pokemon-attributes-container">
      <div className="detail-properties">
        <div className="detail-property-item">
          <div className="detail-property-title">Experience:</div>
          <div className="detail-property-value">
            {pokemonData?.baseExperience}
          </div>
        </div>
        <div className="detail-property-item">
          <div className="detail-property-title">Height:</div>
          <div className="detail-property-value">{pokemonData?.height}</div>
        </div>
        <div className="detail-property-item">
          <div className="detail-property-title">Weight:</div>
          <div className="detail-property-value">{pokemonData?.weight}</div>
        </div>
      </div>
    </div>
  )
}

export default PokemonAttributesBox
