import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { mobile } from '../configs'

const FormMobile = () => {
  const formik = useFormik({
    initialValues: mobile.value,
    validationSchema: Yup.object(mobile.schema),
    onSubmit: values => {
      const data = {
        addType: 'mobile',
        values,
      }
      console.log(data)
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

          <Form.Group as={Col}>
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              placeholder="Model"
              value={formik.values.model}
              onChange={formik.handleChange}
              isValid={formik.touched.model && !formik.errors.model}
              isInvalid={formik.touched.model && !!formik.errors.model}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.model}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md={6} lg={3}>
            <Form.Label>Battery Capacity</Form.Label>
            <Form.Control
              type="text"
              name="batteryCapacity"
              placeholder="Battery Capacity"
              value={formik.values.batteryCapacity}
              onChange={formik.handleChange}
              isValid={
                formik.touched.batteryCapacity && !formik.errors.batteryCapacity
              }
              isInvalid={
                formik.touched.batteryCapacity &&
                !!formik.errors.batteryCapacity
              }
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.batteryCapacity}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={6} lg={3}>
            <Form.Label>RAM</Form.Label>
            <Form.Control
              type="text"
              name="ram"
              placeholder="RAM"
              value={formik.values.ram}
              onChange={formik.handleChange}
              isValid={formik.touched.ram && !formik.errors.ram}
              isInvalid={formik.touched.ram && !!formik.errors.ram}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.ram}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={6} lg={3}>
            <Form.Label>System</Form.Label>
            <Form.Control
              type="text"
              name="system"
              placeholder="System"
              value={formik.values.system}
              onChange={formik.handleChange}
              isValid={formik.touched.system && !formik.errors.system}
              isInvalid={formik.touched.system && !!formik.errors.system}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.system}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md={6} lg={3}>
            <Form.Label>Camera</Form.Label>
            <Form.Control
              type="text"
              name="camera"
              placeholder="Camera"
              value={formik.values.camera}
              onChange={formik.handleChange}
              isValid={formik.touched.camera && !formik.errors.camera}
              isInvalid={formik.touched.camera && !!formik.errors.camera}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.camera}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="col-8">
            <Form.Label>Photo link</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo link"
              value={formik.values.photo}
              onChange={formik.handleChange}
              isValid={formik.touched.photo && !formik.errors.photo}
              isInvalid={formik.touched.photo && !!formik.errors.photo}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.photo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              isValid={formik.touched.price && !formik.errors.price}
              isInvalid={formik.touched.price && !!formik.errors.price}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.price}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId={`exampleForm.ControlTextarea.Mobile`}
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              rows={3}
              style={{ resize: 'none' }}
              isValid={formik.touched.description && !formik.errors.description}
              isInvalid={
                formik.touched.description && !!formik.errors.description
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Button type="submit" className="ml-auto mr-2 mb-4">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </>
  )
}

export default FormMobile
