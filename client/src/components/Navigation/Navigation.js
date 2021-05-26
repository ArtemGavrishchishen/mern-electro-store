import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

import { useNavigations } from '../../configs/navigations'
import routesPath from '../../configs/routesPath'

const Navigation = ({ column = false, closeSide = () => {} }) => {
  const link = useNavigations()

  return (
    <Nav className={column ? 'flex-column' : 'mr-auto'}>
      {link.map(({ name, path }) => {
        if (path === routesPath.MAIN) {
          return (
            <Nav.Link
              as={NavLink}
              key={name}
              to={path}
              exact
              onClick={closeSide}
            >
              {name}
            </Nav.Link>
          )
        }
        return (
          <Nav.Link as={NavLink} key={name} to={path} onClick={closeSide}>
            {name}
          </Nav.Link>
        )
      })}
    </Nav>
  )
}

export default Navigation
