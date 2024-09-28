import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TypeCard from './TypeCard'
import { v4 as uuidv4 } from 'uuid'

import './TypeList.css'

const TypeList = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_POKEMON_TYPE_BASE_URL}?offset=0&limit=100`)
      .then((res) => {
        setTypes([...res.data.results])
      })
  }, [])

  return (
    <div className="type-container">
      {types.map((type) => (
        <TypeCard key={uuidv4()} type={type} />
      ))}
    </div>
  )
}

export default TypeList
