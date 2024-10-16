import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import CatchPokemonButton from './CatchPokemonButton'
import PokemonAttributesBox from './PokemonAttributesBox'
import PokemonAbilitiesBox from './PokemonAbilitiesBox'
import PokemonTypeBox from './PokemonTypeBox'
import PokemonDetailPicture from './PokemonDetailPicture'

import './PokemonDetail.css'

const PokemonDetail = () => {
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonAttributes, setPokemonAttributes] = useState({})
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const [name, setName] = useState('')

  const { pokemonId } = useParams()
  const imageSrc = `${process.env.REACT_APP_PICTURE_BASE_URL}${name}.jpg`
  const pokemonUrl = `${process.env.REACT_APP_POKEMON_BASE_URL}/${pokemonId}`

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => {
      const { abilities, name, height, weight, base_experience, types } =
        res.data
      setName(name)
      setPokemonAttributes({
        height,
        weight,
        baseExperience: base_experience
      })
      setPokemonAbilities(abilities.map((item) => item.ability.name))

      setPokemonTypes(
        types.map((item) => {
          return item.type.name
        })
      )
    })
  }, [pokemonUrl])

  const pictureNameCatchButton = () => {
    return (
      <div className="detail-page-top-block">
        <PokemonDetailPicture
          imageSrc={imageSrc}
          pokemonName={name}
        />
        <div className="name-catch-button-block">
          <div className="detail-page-pokemon-name">{name}</div>
          <CatchPokemonButton isCatched={true} />
        </div>
      </div>
    )
  }

  return (
    <div
      className="detail-page-container"
      style={{ textAlign: 'center' }}
    >
      {pictureNameCatchButton()}
      <PokemonAttributesBox pokemonAttributes={pokemonAttributes} />
      <PokemonAbilitiesBox pokemonAbilities={pokemonAbilities} />
      <PokemonTypeBox pokemonTypes={pokemonTypes} />
    </div>
  )
}

export default PokemonDetail
