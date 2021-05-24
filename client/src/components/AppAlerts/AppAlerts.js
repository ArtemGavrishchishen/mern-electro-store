import React from 'react'
import Toast from 'react-bootstrap/Toast'
import Alert from 'react-bootstrap/Alert'

import styles from './AppAlerts.module.css'

const AppAlerts = ({
  text = null,
  type = 'danger',
  onCloseAlert = () => {},
}) => {
  return (
    <Toast
      onClose={() => {
        onCloseAlert(null)
      }}
      show={!!text}
      delay={4000}
      autohide
      bsPrefix={styles.alert}
    >
      <Toast.Body>
        <Alert variant={type}>{text}</Alert>
      </Toast.Body>
    </Toast>
  )
}

export default AppAlerts
