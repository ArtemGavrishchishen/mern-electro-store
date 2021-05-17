import React from 'react'
import Nav from 'react-bootstrap/Nav'

import { useNavigations } from '../../configs/navigations'

const Navigation = () => {
  const link = useNavigations({ isAuthenticated: true, isAdmin: true })
  return (
    <Nav className="mr-auto">
      {link.map(({ name, path }) => (
        <Nav.Link key={name} href={path}>
          {name}
        </Nav.Link>
      ))}
    </Nav>
  )
}

export default Navigation
