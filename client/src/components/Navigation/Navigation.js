import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

import { useNavigations } from '../../configs/navigations'

const Navigation = ({ column = false }) => {
  const link = useNavigations({ isAuthenticated: true, isAdmin: false })
  return (
    <Nav className={column ? 'flex-column' : 'mr-auto'}>
      {link.map(({ name, path }) => (
        <Nav.Link as={NavLink} key={name} to={path} exact>
          {name}
        </Nav.Link>
      ))}
    </Nav>
  )
}

export default Navigation
