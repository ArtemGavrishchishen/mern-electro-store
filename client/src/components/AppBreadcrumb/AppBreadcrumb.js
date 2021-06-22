import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const AppBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item linkProps={{ to: '/technics' }} linkAs={Link}>
        Technics
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Items</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
