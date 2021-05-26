import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AdminNavigation from '../components/AdminNavigation'
import { useAdminRoutes } from '../configs/routes'

const AdminPage = () => {
  const routes = useAdminRoutes()

  return (
    <>
      <Row style={{ flex: '1 1 100%' }}>
        <Col xs={4} md={3} lg={2}>
          <AdminNavigation />
        </Col>
        <Col xs={8} md={9} lg={10}>
          <Row>
            <Col>
              <h2 className="text-center mt-3">Admin Page</h2>
            </Col>
          </Row>
          <Row>
            <Col>{routes}</Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default AdminPage
