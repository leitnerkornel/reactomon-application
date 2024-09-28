import React from 'react'
import PropTypes from 'prop-types'

const TypeCard = (props) => {
  const name = props.type.name

  return (
    <div className={'type-card'}>
      <div>
        <img
          className="type-image"
          src={`/pokemon_types/${name}.png`}
          alt={`This is: ${name}`}
          draggable="false"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = '/pokemon_types/pokemon_type_not_found.png'
          }}
        />
      </div>
      <div className="type-text">{name}</div>
    </div>
  )
}

TypeCard.propTypes = {
  type: PropTypes.object.isRequired
}

export default TypeCard
