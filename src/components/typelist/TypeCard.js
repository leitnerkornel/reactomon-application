import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './TypeCard.css'

const TypeCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const name = props.type.name

  return (
    <div className="type-card">
      <img
        className={`${isLoaded ? 'loaded' : ''} type-image`}
        src={`/pokemon_types/${name}.png`}
        alt={`This is: ${name}`}
        draggable="false"
        loading="lazy"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/pokemon_types/pokemon_type_not_found.png'
        }}
        onLoad={() => {
          setIsLoaded(true)
        }}
      />
      <div className="type-text">{name}</div>
    </div>
  )
}

TypeCard.propTypes = {
  type: PropTypes.object.isRequired
}

export default TypeCard
