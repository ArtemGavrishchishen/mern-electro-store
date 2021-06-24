import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const AppBreadcrumb = ({ breadcrumb }) => {
  return (
    <Breadcrumb>
      {breadcrumb.map((item, index, arr) => (
        <Breadcrumb.Item
          key={item.name}
          linkProps={{ to: item.route }}
          linkAs={Link}
          active={index + 1 === arr.length}
        >
          {item.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default AppBreadcrumb
