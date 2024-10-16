import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Pagination from '../../pagination/Pagination'
import { v4 as uuidv4 } from 'uuid'

import './PokemonList.css'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [totalCount, setTotalCount] = useState(null)

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_POKEMON_BASE_URL}?offset=${offset}&limit=${limit}`
      )
      .then(({ data }) => {
        setTotalCount(data.count)
        setPokemons(data.results)
      })
  }, [limit, offset])

  return (
    <>
      <Pagination
        offset={offset}
        totalCount={totalCount}
        limit={limit}
        changeOffset={setOffset}
        itemsPerPageOptions={[10, 15, 25, 50]}
        changeLimit={setLimit}
      />
      <div className="pokemon-card-container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={uuidv4()}
            pokemon={pokemon}
          />
        ))}
      </div>
    </>
  )
}

export default PokemonList
