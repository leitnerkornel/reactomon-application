import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getPokemonIdFromUrl } from '../../../Utils'

const PokemonCard = (props) => {
  const name = props.pokemon.name
  const pokemonId = getPokemonIdFromUrl(props.pokemon.url)
  const imageSrc = `${process.env.REACT_APP_PICTURE_BASE_URL}${name}.jpg`

  const cardPicture = () => {
    return (
      <div>
        <img
          className="pokemon-card-image"
          src={imageSrc}
          alt={`This is: ${name}.`}
          draggable="false"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = '/pokemon_not_found.png'
          }}
        />
      </div>
    )
  }

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className="pokemon-card">
        {cardPicture()}
        <div className="pokemon-card-name">{name}</div>
      </div>
    </Link>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard
