import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PokemonCardImage from './PokemonCardImage'
import { getPokemonIdFromUrl } from '../../../Utils'

const PokemonCard = (props) => {
  const name = props.pokemon.name
  const pokemonId = getPokemonIdFromUrl(props.pokemon.url)
  const imageSrc = `${process.env.REACT_APP_PICTURE_BASE_URL}${name}.jpg`

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className="pokemon-card">
        <PokemonCardImage
          imageSrc={imageSrc}
          pokemonName={name}
        />
        <div className="pokemon-card-name">{name}</div>
      </div>
    </Link>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard
