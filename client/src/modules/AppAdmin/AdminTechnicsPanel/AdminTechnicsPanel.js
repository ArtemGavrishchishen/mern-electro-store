import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'

import { toCurrency } from '../../../helpers'
import { getTechnics } from '../../../store/actions/technics.actions'

const AdminTechnicsPanel = () => {
  const technics = useSelector(state => state.technics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTechnics())
  }, [dispatch])

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th style={{ width: '50px' }}>№</th>
          <th style={{ maxWidth: '150px' }}>Photo</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      {technics.length !== 0 && (
        <tbody>
          {technics.map((technic, index) => (
            <tr key={technic._id} style={{ cursor: 'pointer' }}>
              <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                {index + 1}
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <Image src={technic.photo[0].thumbUrl} fluid />
              </td>
              <td style={{ verticalAlign: 'middle' }}>{technic.brand}</td>
              <td style={{ verticalAlign: 'middle' }}>{technic.model}</td>
              <td style={{ verticalAlign: 'middle' }}>
                <div style={{ maxHeight: '100px', overflow: 'hidden' }}>
                  {technic.description}
                </div>
              </td>
              <th style={{ verticalAlign: 'middle', textAlign: 'end' }}>
                {toCurrency(technic.price)}
              </th>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  )
}

export default AdminTechnicsPanel
