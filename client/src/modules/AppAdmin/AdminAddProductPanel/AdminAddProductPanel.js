import React, { useState } from 'react'
import Select from 'react-select'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import AdminAddForm from '../AdminAddForm'
import styles from './AdminAddProductPanel.module.css'

const AdminAddProductPanel = () => {
  const [selectedType, setSelectedType] = useState({
    value: 'mobile',
    label: 'Mobile',
  })

  const options = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'tablets', label: 'Tablets' },
    { value: 'notebooks', label: 'Notebooks' },
    { value: 'tv', label: 'TV' },
  ]

  return (
    <>
      <Select
        value={selectedType}
        onChange={e => setSelectedType(e)}
        options={options}
        className={styles.select}
      />
      <Tabs
        id="controlled-tab-example"
        activeKey={selectedType.value}
        onSelect={k => setSelectedType(k)}
        className="mb-3"
      >
        <Tab eventKey="mobile">
          <AdminAddForm type="mobile" />
        </Tab>
        <Tab eventKey="tablets">
          <AdminAddForm type="tablets" />
        </Tab>
        <Tab eventKey="notebooks">
          <AdminAddForm type="notebooks" />
        </Tab>
        <Tab eventKey="tv">
          <AdminAddForm type="tv" />
        </Tab>
      </Tabs>
    </>
  )
}

export default AdminAddProductPanel
