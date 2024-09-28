import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Navbar.css'

const NavbarItem = (props) => {
  const title = props.title
  const route = `/${props.route}`

  return (
    <Link to={route} className="navbar-link">
      {title}
    </Link>
  )
}

NavbarItem.propType = {
  key: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
}

export default NavbarItem
