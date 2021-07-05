import React from 'react'

const TechnicsById = ({ technic }) => {
  if (!technic) return null
  return <div>TechnicsById {technic._id}</div>
}

export default TechnicsById
