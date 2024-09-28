import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './HomeLinkButton.css'

const HomeLinkButton = (props) => {
  const route = props.route
  const title = props.title

  return (
    <div className="home-link-button">
      <Link to={`/${route}`} className="home-link">
        <div className="home-link-button-title">{title}</div>
      </Link>
    </div>
  )
}

HomeLinkButton.propType = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default HomeLinkButton
