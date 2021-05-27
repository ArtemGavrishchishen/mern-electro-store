import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const AdminAddForm = ({ type = '' }) => {
  const value = {
    brand: '',
  }
  const formik = useFormik({
    initialValues: value,
    validationSchema: Yup.object({}),
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Brand name</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              placeholder="Brand name"
              value={formik.values.brand}
              onChange={formik.handleChange}
              isValid={formik.touched.brand && !formik.errors.brand}
              isInvalid={formik.touched.brand && !!formik.errors.brand}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.brand}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default AdminAddForm
