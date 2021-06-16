import React, { useState } from 'react'
import Select from 'react-select'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'

import AdminAddForm from './AdminAddForm'

import { types } from '../../../configs/category'
import styles from './AdminAddProductPanel.module.css'

const AdminAddProductPanel = () => {
  const [selectedType, setSelectedType] = useState({
    value: types.MOBILE,
    label: 'Mobile',
  })

  const options = [
    { value: types.MOBILE, label: 'Mobile' },
    { value: types.TABLETS, label: 'Tablets' },
    { value: types.NOTEBOOKS, label: 'Notebooks' },
    { value: types.TV, label: 'TV' },
    { value: types.OTHER, label: 'Other' },
  ]

  return (
    <>
      <Container>
        <Select
          value={selectedType}
          onChange={e => setSelectedType(e)}
          options={options}
          className={styles.select}
        />

        <Tab.Container
          transition={false}
          id="controlled-tab-example"
          activeKey={selectedType.value}
          onSelect={k => setSelectedType(k)}
          className="mb-3"
        >
          <Tab.Content>
            {options.map(tab => (
              <Tab.Pane key={tab.value} eventKey={tab.value}>
                <AdminAddForm type={tab.value} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  )
}

export default AdminAddProductPanel
