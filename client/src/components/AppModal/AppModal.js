import React from 'react'
import Modal from 'react-bootstrap/Modal'

import styles from './AppModal.module.css'

const AppModal = ({ isModal, closeModal, title = 'Modal', children }) => {
  return (
    <Modal
      show={isModal}
      onHide={closeModal}
      centered
      contentClassName={styles.content}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default AppModal
